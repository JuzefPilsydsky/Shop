import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class AdminDto {
    @IsNotEmpty({message:'Must be email'})
    @IsEmail({message:'Email is not valid'})
    @IsString({message:'Must be a string'})
    readonly email: string;

    @IsNotEmpty({message:'Must be a password'})
    @IsString({message:"Password must be a string"})
    @Length(5, 16, {message:"Password must be min 5 and max 16 words"})
    readonly password: string;

    @IsNotEmpty({message:'Must be a name'})
    @IsString({message:"Name must be a string"})
    readonly name: string;
}