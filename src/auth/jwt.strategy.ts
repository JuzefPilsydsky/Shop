import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Role } from "./role.enum";


@Injectable()
export class JwtStrategy implements CanActivate {
    constructor(private jwtService: JwtService,
                private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]
            
            if(bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException()
            }

            const user = this.jwtService.verify(token);
            const requiredRoles = this.reflector.get<Role[]>('role', context.getHandler());
            if(requiredRoles && !requiredRoles.includes(user.role)) {
                throw new UnauthorizedException()
            }
            req.user = user;
            return true;
        
        } catch(e) {
            throw new UnauthorizedException()
        } 

    }
}
