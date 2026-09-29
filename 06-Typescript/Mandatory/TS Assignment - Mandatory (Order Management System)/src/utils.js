"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterExpensiveProducts = filterExpensiveProducts;
function filterExpensiveProducts(items, minPrice) {
    return items.filter(item => item.price >= minPrice);
}
//# sourceMappingURL=utils.js.map