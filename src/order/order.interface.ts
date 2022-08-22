import { OrderProducts } from "./order.products.interface";

export interface Order {
    id: number;
    clientPhone: string;
    clientEmail: string;
    clientName: string;
    status: number;
    products: OrderProducts;
}