import { ProductORM } from "src/product/productORM";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ListOfProducts } from "./list.of.products.interface";
import { OrderListORM } from "./order.list.ORM";

@Entity({name:"List of Products"})
export class ListOfProductsORM implements ListOfProducts {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    count: number;
    @Column()
    prise: number;
    @Column()
    currensy: string;
    @OneToOne((type) => ProductORM)
    @JoinColumn()
    productId: ProductORM;
    @ManyToOne((type) => OrderListORM, orderList => orderList.id, {nullable: false})
    @JoinColumn({name:'orderLIstId'})
    orderListId: OrderListORM;
}