import { ProductORM } from "src/product/productORM";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.interface";

@Entity({name: "Category"})
export class CategoryORM implements Category {
    @PrimaryGeneratedColumn('increment')
    @OneToMany((type) => ProductORM, category => category.categoryId )
    id: number;
    @Column()
    name: string;
    @Column()
    imgUrl: string;
}