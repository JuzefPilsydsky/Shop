import { Products } from "src/product/product.interface";

export interface OrderProducts {
    id: number;
    count: number;
    price: number;
    currency: string;
    productId: Products;
}