import { Products } from "src/product/product.interface";

export interface ListOfProducts {
    id: number;
    count: number;
    price: number;
    currency: string;
    productId: Products;
}