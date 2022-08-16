import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ListOfProductsDto {
    @IsNotEmpty({message:'Must be a count'})
    @IsNumber()
    count: number;
    @IsNotEmpty({message:'Must be a price'})
    @IsNumber()
    price: number;
    @IsNotEmpty({message:'Must be a currency'})
    @IsString()
    currency: string;
    @IsNotEmpty({message:'Must be a product'})
    @IsNumber()
    productId: number;
}