# TypeScript Generics – Smart Inventory System

## Assignment Overview

This project demonstrates the use of **TypeScript Generics** by creating a reusable generic repository that can manage different types of inventory-related entities.

The system manages:

- Products
- Suppliers
- Warehouses

## Technologies Used

- TypeScript
- JavaScript
- Node.js

## Key TypeScript Concepts

### 1. Interfaces

Interfaces are used to define the structure of:

- Product
- Supplier
- Warehouse

### 2. Generic Repository

A reusable generic repository is created using:

```typescript
GenericRepository<T extends BaseEntity>
```

The same repository is used for:

```typescript
GenericRepository<Product>
GenericRepository<Supplier>
GenericRepository<Warehouse>
```

### 3. Generic CRUD Operations

The repository supports operations such as:

- Add
- Get by ID
- Delete by ID
- Get all items

### 4. Type Safety

The generic repository ensures that only the correct entity type can be added to each repository.

## Program Operations

The application demonstrates:

1. Searching for a product by ID.
2. Searching for a supplier by ID.
3. Deleting a warehouse by ID.
4. Displaying the remaining warehouse records.
5. Displaying the final Product, Supplier, and Warehouse data.

## Sample Output

```text
===== PRODUCT SEARCH =====
{ id: 101, name: 'Laptop', price: 50000 }

===== SUPPLIER SEARCH =====
{ id: 2, supplierName: 'Global Electronics' }

===== WAREHOUSE DELETE =====
Remaining Warehouses:
[ { id: 12, location: 'Bangalore' } ]
```

## Compilation and Execution

Compile and check the TypeScript code:

```bash
tsc --noEmit smart-inventory-system.ts
```

Compile the TypeScript file:

```bash
tsc smart-inventory-system.ts
```

Run the generated JavaScript file:

```bash
node smart-inventory-system.js
```

## Screenshots

The `Screenshots` folder contains evidence of:

- TypeScript compilation and program output
- Generic repository implementation
- Search and delete operations

## Conclusion

This assignment demonstrates how TypeScript Generics can be used to create reusable, type-safe components. A single generic repository is reused for Products, Suppliers, and Warehouses, reducing duplicate code while maintaining strong type safety.