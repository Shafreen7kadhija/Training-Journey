"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const Product_1 = require("./Product");
const Order_1 = require("./Order");
class OrderService {
    orderIdCounter = 1;
    createOrder(products) {
        const order = {
            id: this.orderIdCounter,
            products: products
        };
        this.orderIdCounter++;
        return order;
    }
    calculateTotal(order) {
        let total = 0;
        for (const product of order.products) {
            total += product.price;
        }
        return total;
    }
    applyDiscount(order, discount) {
        const total = this.calculateTotal(order);
        if (discount === undefined) {
            return total;
        }
        if (discount < 0 || discount > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        order.discount = discount;
        const discountAmount = (total * discount) / 100;
        return total - discountAmount;
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map