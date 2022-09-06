import { CategoryORM } from "src/category/categoryORM";
import { OrderProductsORM } from "src/order/order.products.ORM";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Products } from "./product.interface";

@Entity({name: "Products"})
@Unique(['name'])
export class ProductORM implements Products {
    @PrimaryGeneratedColumn('increment')
    @OneToMany((type) => OrderProductsORM, value => value.productId )
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    currency: string;
    @Column()
    imgUrl: string;
    @ManyToOne((type) => CategoryORM, categoryId => categoryId.id, {nullable: false})
    @JoinColumn({name:'categoryId'})
    categoryId: CategoryORM;
}