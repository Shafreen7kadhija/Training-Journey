import { Product } from "./Product";
import { Order } from "./Order";

export class OrderService {

    private orderIdCounter: number = 1;

    createOrder(products: Product[]): Order {
        const order: Order = {
            id: this.orderIdCounter,
            products: products
        };

        this.orderIdCounter++;

        return order;
    }

    calculateTotal(order: Order): number {
        let total: number = 0;

        for (const product of order.products) {
            total += product.price;
        }

        return total;
    }

    applyDiscount(order: Order, discount?: number): number {
        const total: number = this.calculateTotal(order);

        if (discount === undefined) {
            return total;
        }

        if (discount < 0 || discount > 100) {
            throw new Error("Discount must be between 0 and 100");
        }

        order.discount = discount;

        const discountAmount: number = (total * discount) / 100;

        return total - discountAmount;
    }
}