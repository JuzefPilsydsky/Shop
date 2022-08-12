import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.interface";

@Entity({name: "Category"})
export class CategoryORM implements Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    imgUrl: string;
}