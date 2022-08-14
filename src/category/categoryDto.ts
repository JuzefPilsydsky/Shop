import { IsNotEmpty, IsString } from "class-validator";

export class CategoryDto {
    @IsNotEmpty({message:'Must be a name'})
    @IsString({message:'Name must be a string'})
    readonly name: string;
    @IsNotEmpty({message:'Must be a image'})
    readonly imgUrl: string;
}