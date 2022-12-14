import { Controller, Request, UseGuards, Post, Body } from '@nestjs/common';
import { AdminDto } from 'src/admin/adminDto';
import { AuthAdminDto } from 'src/admin/authAdminDto';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { Role } from './role.enum';
import { Roles } from './roles.decorator';


@Controller('auth')
export class AuthController {
    constructor(private authServise: AuthService) {}

    @Post('/authentication')
    async authentication(@Request() req, @Body() authDto: AuthAdminDto) {
        return this.authServise.Đ°uthentication(authDto)
    }

    @UseGuards(JwtStrategy)
    @Roles(Role.OWNER)
    @Post('/registration')
    async registration(@Request() req, @Body() adminDto: AdminDto) {
        return this.authServise.registration(adminDto)
    }
}
