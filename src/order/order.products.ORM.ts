import { ProductORM } from "src/product/productORM";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderProducts } from "./order.products.interface";
import { OrderORM } from "./order.ORM";

@Entity({name:"ListOfProducts"})
export class OrderProductsORM implements OrderProducts {
    @PrimaryGeneratedColumn('increment')
    @ManyToOne((type) => OrderORM, value => value.products)
    id: number;
    @Column()
    count: number;
    @Column()
    price: number;
    @Column()
    currency: string;
    @ManyToOne((type) => ProductORM, value => value.id)
    @JoinColumn({name:'productId'})
    productId: ProductORM;
    @ManyToOne((type) => OrderORM, order => order.id)
    @JoinColumn({name:'orderId'})
    orderId: OrderORM;
}