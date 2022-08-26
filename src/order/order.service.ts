import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { OrderORM } from './order.ORM';
import { OrderDto } from './orderDto';
import { OrderProductsORM } from './order.products.ORM';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderORM)
        private orderRepository: Repository<OrderORM>,
        @InjectRepository(OrderProductsORM)
        private orderProductsRepository: Repository<OrderProductsORM>,
        @Inject(ProductService)
        private productService: ProductService
    ) {}

    
    getOne(id: number): Promise<OrderORM | null> {
        return this.orderRepository.findOneBy({id})
    }
    
    async create(orderDto: OrderDto) {
        for(let i = 0; i< orderDto.products.length; i++) {
            const product = await this.productService.getOne(orderDto.products[i].productId);
            if(product == null || undefined) {
                throw new Error('The product does not exist')
            }
            const clientPrice = orderDto.products[i].price;

            if(clientPrice !== product.price * orderDto.products[i].count) {
                throw new Error('Price is not valid')
            }
        }

        let order = this.orderRepository.create({
            clientPhone: orderDto.clientPhone,
            clientEmail: orderDto.clientEmail,
            clientName: orderDto.clientName,
        });
        order = await this.orderRepository.save(order)
        console.log(order);
        console.log(orderDto.products.length);
        for(let i = 0; i < orderDto.products.length; i++) {
            console.log('get product');
            const product = await this.productService.getOne(orderDto.products[i].productId);
            if(product == null || undefined) {
                throw new Error('The product does not exist')
            }
            const clientPrice = orderDto.products[i].price;

            if(clientPrice !== product.price * orderDto.products[i].count) {
                throw new Error('Price is not valid')
            }
            
            console.log('create order product');

            let list = this.orderProductsRepository.create({
                count: orderDto.products[i].count,
                price: orderDto.products[i].price,
                currency: orderDto.products[i].currency,
                productId: product,
                orderId: order,
            })

            console.log(list);

            list = await this.orderProductsRepository.save(list)

        }
        
        return order.id;
    }

    async delete(id: number): Promise<void> {
         await this.orderRepository.delete(id)
    }
}
