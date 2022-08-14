import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ListOfProductsORM } from "./list.of.products.ORM";
import { OrderList } from "./order.list.interface";
import { OrderStatus } from "./order.status.enum";

@Entity({name: "Order List"})
@Unique(["clientEmail", "clientPhone"])
export class OrderListORM implements OrderList{
    @PrimaryGeneratedColumn()
    @OneToMany((type) => ListOfProductsORM, orderList => orderList.orderListId)
    id: number;
    @Column()
    clientPhone: number;
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
}   