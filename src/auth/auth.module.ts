import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminModule } from 'src/admin/admin.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy, JwtModule],
  imports: [
   forwardRef(() => AdminModule), 
    
    PassportModule,
    
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "SOME_SECRET_KEY999",
      signOptions: { expiresIn: '12h' }, 
    }),
    
    ]
})
export class AuthModule {}
