import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { AdminDto } from 'src/admin/adminDto';
import * as bcrypt from 'bcryptjs';
import { AdminORM } from 'src/admin/adminORM';
import { AuthAdminDto } from 'src/admin/authAdminDto';

@Injectable()
export class AuthService {
    constructor( 
        private adminService: AdminService,
        private jwtService: JwtService   
    ) {}

    async аuthentication(authAdminDto: AuthAdminDto) {
        const admin = await this.validateAdmin(authAdminDto);
        return this.generateToken(admin)
    };
    
    
    
    async registration(adminDto: AdminDto) {
        const candidate = await this.adminService.getOneByLogin(adminDto.login);
        if(candidate) {
            throw new HttpException('An admin with such a login already exists', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(adminDto.password, 5);
        const admin = await this.adminService.create({...adminDto, password: hashPassword});
        return this.generateToken(admin)
    }
    
    
    private async generateToken(admin: AdminORM) {
        const payload: TokenPayLoad = {
            login: admin.login,
            id: admin.id,
            role: admin.role
        }

        return {
            token: this.jwtService.sign(payload)
        }
    }

    async validateAdmin(authAdminDto: AuthAdminDto) {
        const admin = await this.adminService.getOneByLogin(authAdminDto.login);
        const passwordEquals = await bcrypt.compare(authAdminDto.password, admin.password);
        if(admin && passwordEquals) {
            return admin;
        }
        throw new UnauthorizedException({message: 'Wrong login or password'})
    }
    
}

    