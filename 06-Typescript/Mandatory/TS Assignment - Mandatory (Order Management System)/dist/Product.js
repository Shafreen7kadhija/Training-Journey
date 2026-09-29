"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = validateProduct;
function validateProduct(product) {
    if (!/^[A-Za-z\s]+$/.test(product.name)) {
        throw new Error("Product name should contain only alphabets");
    }
    if (product.price <= 0) {
        throw new Error("Price must be greater than 0");
    }
}
