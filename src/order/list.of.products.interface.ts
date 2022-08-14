import { Products } from "src/product/product.interface";
import { OrderList } from "./order.list.interface";

export interface ListOfProducts {
    id: number;
    count: number;
    prise: number;
    currensy: string;
    productId: Products;
    orderListId: OrderList;
}