import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { ListOfProducts } from "./list.of.products.interface";
import { OrderStatus } from "./order.status.enum";

export class OrderListDto {
    @IsNotEmpty({message:'Must be a phone number'})
    @IsPhoneNumber()
    readonly clientPhone: number;
    @IsNotEmpty({message:'Must be email'})
    @IsEmail()
    readonly clientEmail: string;
    @IsNotEmpty({message:'Must be a name'})
    readonly clientName: string;
    @IsNotEmpty({message:'Must be a status'})
    readonly status: OrderStatus;
    @IsNotEmpty({message:'Must be a list of products'})
    listOfProducts: ListOfProducts[];  
}