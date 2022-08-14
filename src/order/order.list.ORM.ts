import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { OrderList } from "./order.list.interface";
import { OrderStatus } from "./order.status.enum";

@Entity({name: "Order List"})
@Unique(["clientEmail", "clientPhone"])
export class OrderListORM implements OrderList{
    @PrimaryGeneratedColumn()
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