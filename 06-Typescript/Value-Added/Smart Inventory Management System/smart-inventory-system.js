"use strict";
// ============================================
// SMART INVENTORY MANAGEMENT SYSTEM
// TypeScript Generics Assignment
// ============================================
// ============================================
// GENERIC REPOSITORY
// ============================================
class GenericRepository {
    items = [];
    // Add an entity
    add(entity) {
        this.items.push(entity);
    }
    // Get all entities
    getAll() {
        return this.items;
    }
    // Get entity by ID
    getById(id) {
        return this.items.find(item => item.id === id);
    }
    // Delete entity by ID
    deleteById(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
}
// ============================================
// EXISTING DATASETS
// DO NOT MODIFY THESE VALUES
// ============================================
const products = [
    {
        id: 101,
        name: "Laptop",
        price: 50000
    },
    {
        id: 102,
        name: "Mouse",
        price: 1000
    }
];
const suppliers = [
    {
        id: 1,
        supplierName: "Tech Distributors"
    },
    {
        id: 2,
        supplierName: "Global Electronics"
    }
];
const warehouses = [
    {
        id: 11,
        location: "Chennai"
    },
    {
        id: 12,
        location: "Bangalore"
    }
];
// ============================================
// CREATE GENERIC REPOSITORIES
// ============================================
const productRepository = new GenericRepository();
const supplierRepository = new GenericRepository();
const warehouseRepository = new GenericRepository();
// ============================================
// LOAD EXISTING DATA INTO REPOSITORIES
// ============================================
products.forEach(product => {
    productRepository.add(product);
});
suppliers.forEach(supplier => {
    supplierRepository.add(supplier);
});
warehouses.forEach(warehouse => {
    warehouseRepository.add(warehouse);
});
// ============================================
// VERIFICATION 1 - PRODUCT SEARCH
// ============================================
console.log("===== PRODUCT SEARCH =====");
const product = productRepository.getById(101);
console.log(product);
// ============================================
// VERIFICATION 2 - SUPPLIER SEARCH
// ============================================
console.log("\n===== SUPPLIER SEARCH =====");
const supplier = supplierRepository.getById(2);
console.log(supplier);
// ============================================
// VERIFICATION 3 - WAREHOUSE DELETE
// ============================================
console.log("\n===== WAREHOUSE DELETE =====");
warehouseRepository.deleteById(11);
console.log("Remaining Warehouses:");
console.log(warehouseRepository.getAll());
// ============================================
// FINAL APPLICATION OUTPUT
// ============================================
console.log("\n===== FINAL APPLICATION OUTPUT =====");
console.log("\nProducts:");
console.log(productRepository.getAll());
console.log("\nSuppliers:");
console.log(supplierRepository.getAll());
console.log("\nWarehouses:");
console.log(warehouseRepository.getAll());
