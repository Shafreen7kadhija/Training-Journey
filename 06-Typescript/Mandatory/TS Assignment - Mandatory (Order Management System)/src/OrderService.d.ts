import { Product } from "./Product";
import { Order } from "./Order";
export declare class OrderService {
    private orderIdCounter;
    createOrder(products: Product[]): Order;
    calculateTotal(order: Order): number;
    applyDiscount(order: Order, discount?: number): number;
}
//# sourceMappingURL=OrderService.d.ts.map