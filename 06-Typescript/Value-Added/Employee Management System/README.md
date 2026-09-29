# Employee Management System

## 1. Project Overview

This project is a TypeScript-based Employee Management System developed as part of the Value-Added Assignment.

The project demonstrates the use of TypeScript interfaces, classes, arrays, optional properties, array methods, error handling, and basic employee-related operations.

---

## 2. Technologies Used

- TypeScript
- JavaScript
- Node.js
- Visual Studio Code

---

## 3. Features

The Employee Management System provides the following features:

- Store employee details using an `Employee` interface.
- Store multiple employees using an array.
- Search for an employee using their ID.
- Display employee details.
- Convert an employee's name to uppercase.
- Calculate 10% tax based on salary.
- Handle employees whose salary may be undefined.
- Handle the case where an employee is not found.

---

## 4. TypeScript Concepts Used

### Interface

The `Employee` interface defines the structure of an employee:

```typescript
interface Employee {
    id: number;
    name: string;
    department: string;
    salary?: number;
}
```

The `salary` property is optional because of the `?`.

### Class

The `EmployeeService` class contains the employee data and related methods.

### Array

Employee objects are stored inside an array:

```typescript
private employees: Employee[] = [...]
```

### Array `find()` Method

The `find()` method is used to search for an employee by ID:

```typescript
this.employees.find(emp => emp.id === id);
```

### Optional Property Handling

Since salary is optional, the program checks whether salary is available before calculating tax.

### Error Handling

If an employee with the requested ID does not exist, an error is thrown:

```typescript
throw new Error("Employee not found");
```

---

## 5. Program Operations

### Employee Details

The program retrieves employee ID `101` and displays:

- ID
- Name
- Department
- Salary

### Uppercase Name

The employee's name is converted to uppercase using:

```typescript
employee.name.toUpperCase()
```

### Tax Calculation

The program calculates 10% tax from the employee's salary.

For example:

```text
Salary = 50000
Tax = 50000 × 10%
Tax = 5000
```

### Second Employee

The program also retrieves employee ID `102` and displays the employee's details.

---

## 6. Sample Output

```text
===== EMPLOYEE DETAILS =====
ID: 101
Name: John
Department: IT
Salary: 50000

===== UPPERCASE NAME =====
JOHN

===== TAX =====
10% Tax: 5000

===== SECOND EMPLOYEE =====
ID: 102
Name: Alice
Department: HR
Salary: 45000
```

---

## 7. How to Run the Project

### Step 1: Compile-check the TypeScript file

```bash
tsc --noEmit employee-management.ts
```

### Step 2: Compile TypeScript to JavaScript

```bash
tsc employee-management.ts
```

### Step 3: Run the generated JavaScript file

```bash
node employee-management.js
```

---

## 8. Project Structure

```text
Employee-management-ts/
│
├── Screenshots/
│   ├── 01_TypeScript_Compilation.png
│   ├── 02_Program_Output.png
│   └── 03_Project_Structure.png
│
├── employee-management.ts
├── employee-management.js
└── README.md
```

---

## 9. Conclusion

This assignment demonstrates how TypeScript can be used to create a simple employee management system with strong type checking and object-oriented programming concepts.

The project also demonstrates how TypeScript errors can be identified and corrected before compiling the program into JavaScript.