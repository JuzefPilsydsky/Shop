import { IsNotEmpty } from "class-validator";

export class CategoryDto {
    @IsNotEmpty({message:'Must be a name'})
    readonly name: string;
    @IsNotEmpty({message:'Must be a image'})
    readonly imgUrl: string;
}