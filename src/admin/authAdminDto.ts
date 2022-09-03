import { IsNotEmpty, IsString, Length } from "class-validator";

export class AuthAdminDto {
    @IsNotEmpty({message:'Must be a login'})
    @IsString({message:'Must be a string'})
    readonly login: string;

    @IsNotEmpty({message:'Must be a password'})
    @IsString({message:"Password must be a string"})
    @Length(5, 20, {message:"Password must be min 5 and max 16 words"})
    readonly password: string;
}