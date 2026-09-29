"use strict";
class EmployeeService {
    employees = [
        {
            id: 101,
            name: "John",
            department: "IT",
            salary: 50000
        },
        {
            id: 102,
            name: "Alice",
            department: "HR",
            salary: 45000
        }
    ];
    // Get employee by ID
    getEmployeeById(id) {
        const employee = this.employees.find(emp => emp.id === id);
        if (!employee) {
            throw new Error("Employee not found");
        }
        return employee;
    }
    // Calculate 10% tax
    calculateTax(employee) {
        if (employee.salary === undefined) {
            return 0;
        }
        return employee.salary * 0.10;
    }
    // Display employee name in uppercase
    displayEmployee(employee) {
        return employee.name.toUpperCase();
    }
}
// Create EmployeeService object
const employeeService = new EmployeeService();
// Get first employee
const employee = employeeService.getEmployeeById(101);
// Display employee details
console.log("===== EMPLOYEE DETAILS =====");
console.log("ID:", employee.id);
console.log("Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
// Display uppercase name
console.log("\n===== UPPERCASE NAME =====");
console.log(employeeService.displayEmployee(employee));
// Calculate tax
console.log("\n===== TAX =====");
console.log("10% Tax:", employeeService.calculateTax(employee));
// Get second employee
const employee2 = employeeService.getEmployeeById(102);
// Display second employee
console.log("\n===== SECOND EMPLOYEE =====");
console.log("ID:", employee2.id);
console.log("Name:", employee2.name);
console.log("Department:", employee2.department);
console.log("Salary:", employee2.salary);
