import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";


export class OrderProductsDto {
    @IsNotEmpty({message:'Must be a count'})
    @IsNumber()
    readonly count: number;
    @IsNotEmpty({message:'Must be a price'})
    @IsNumber()
    readonly price: number;
    @IsNotEmpty({message:'Must be a currency'})
    @IsString()
    readonly currency: string;
    @IsNotEmpty({message:'Must be a product'})
    @IsNumber()
    readonly productId: number;
}

export class OrderDto {
    @IsNotEmpty({message:'Must be a phone number'})
    @IsPhoneNumber()
    readonly clientPhone: string;
    @IsNotEmpty({message:'Must be email'})
    @IsEmail()
    readonly clientEmail: string;
    @IsNotEmpty({message:'Must be a name'})
    @IsString()
    readonly clientName: string;
    @IsNotEmpty({message:'Must be a list of products'})
    readonly products: OrderProductsDto[];
}