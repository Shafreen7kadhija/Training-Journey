export interface Product {
    id: number;
    name: string;
    price: number;
}

export function validateProduct(product: Product): void {
    if (!/^[A-Za-z\s]+$/.test(product.name)) {
        throw new Error("Product name should contain only alphabets");
    }

    if (product.price <= 0) {
        throw new Error("Price must be greater than 0");
    }
}