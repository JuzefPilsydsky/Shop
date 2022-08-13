import { Category } from "src/category/category.interface";

export interface Products {
    id: number,
    name: string,
    price: number,
    currency: string,
    imgUrl: string,
    categoryId: Category,
 }