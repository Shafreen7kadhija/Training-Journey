import { Product, validateProduct } from "./Product";
import { OrderService } from "./OrderService";
import { filterExpensiveProducts } from "./utils";

const products: Product[] = [
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
    validateProduct(product);
}

const orderService = new OrderService();

// Create order
const order = orderService.createOrder(products);

// Calculate original total
const originalTotal = orderService.calculateTotal(order);

// Apply 10% discount
const finalTotal = orderService.applyDiscount(order, 10);

// Filter products with price >= 10000
const expensiveProducts = filterExpensiveProducts(products, 10000);

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