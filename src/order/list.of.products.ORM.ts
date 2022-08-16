import { ProductORM } from "src/product/productORM";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ListOfProducts } from "./list.of.products.interface";

@Entity({name:"List of Products"})
export class ListOfProductsORM implements ListOfProducts {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    count: number;
    @Column()
    price: number;
    @Column()
    currency: string;
    @OneToOne((type) => ProductORM)
    @JoinColumn()
    productId: ProductORM;  
}