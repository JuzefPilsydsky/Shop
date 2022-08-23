import { CategoryORM } from "src/category/categoryORM";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Products } from "./product.interface";

@Entity({name: "Products"})
@Unique(['name'])
export class ProductORM implements Products {
    @PrimaryGeneratedColumn('increment')
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