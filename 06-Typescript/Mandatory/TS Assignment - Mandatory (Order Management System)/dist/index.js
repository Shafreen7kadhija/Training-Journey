"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const OrderService_1 = require("./OrderService");
const utils_1 = require("./utils");
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000
    },
    {
        id: 2,
        name: "Keyboard",
        price: 2500
    },
    {
        id: 3,
        name: "Monitor",
        price: 15000
    }
];
// Validate all products
for (const product of products) {
    (0, Product_1.validateProduct)(product);
}
const orderService = new OrderService_1.OrderService();
// Create order
const order = orderService.createOrder(products);
// Calculate original total
const originalTotal = orderService.calculateTotal(order);
// Apply 10% discount
const finalTotal = orderService.applyDiscount(order, 10);
// Filter products with price >= 10000
const expensiveProducts = (0, utils_1.filterExpensiveProducts)(products, 10000);
console.log("===== ORDER DETAILS =====");
console.log("Order ID:", order.id);
console.log("\n===== PRODUCTS =====");
console.log(order.products);
console.log("\n===== ORIGINAL TOTAL =====");
console.log(originalTotal);
console.log("\n===== DISCOUNT =====");
console.log(order.discount + "%");
console.log("\n===== FINAL TOTAL =====");
console.log(finalTotal);
console.log("\n===== EXPENSIVE PRODUCTS =====");
console.log(expensiveProducts);
