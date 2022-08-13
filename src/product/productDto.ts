import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "src/category/category.interface";

export class ProductDto {
    @IsNotEmpty({message:'Must be a name of product'})
    @IsString({message:"Name must be a string"})
    readonly name: string;
 
    @IsNotEmpty({message:'Must be a prise'})
    @IsNumber()
    readonly price: number;
 
    @IsNotEmpty({message:'Must be a currensy'})
    @IsString({message:"Currensy must be a string"})
    readonly currency: string;
 
    @IsNotEmpty({message:'Must be a immage'})
    readonly imgUrl: string;
 
    @IsNumber()
    readonly categoryId: Category;
 }