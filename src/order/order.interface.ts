import { ListOfProducts } from "./list.of.products.interface";

export interface Order {
    id: number;
    clientPhone: number;
    clientEmail: string;
    clientName: string;
    status: number;
    listOfProducts: ListOfProducts;
}