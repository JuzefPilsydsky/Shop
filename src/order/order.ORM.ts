import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderProductsORM } from "./order.products.ORM";
import { Order } from "./order.interface";
import { OrderStatus } from "./order.status.enum";

@Entity({name: "OrderList"})
export class OrderORM implements Order{
    @PrimaryGeneratedColumn('increment')
    @OneToMany((type) => OrderProductsORM, item => item.orderId)
    id: number;
    @Column()
    clientPhone: string;
    @Column()
    clientEmail: string;
    @Column()
    clientName: string;
    @Column({
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.processed,
    })
    status: OrderStatus;
    @OneToMany((type) => OrderProductsORM, value => value.id)
    @JoinColumn({name:'products'})
    products: OrderProductsORM;
}   