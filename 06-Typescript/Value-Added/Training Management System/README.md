# Training Management System

## Overview

This project is a TypeScript-based Training Management System. It demonstrates stack operations, queue operations, binary search, and a tree-based learning path.

The assignment focuses on debugging TypeScript code, applying proper type safety, and implementing common data structure operations.

## Features

### 1. Recently Viewed Courses

The `RecentlyViewedCourses` class uses an array as a stack.

- `push()` adds a course to the stack.
- `pop()` removes and returns the most recently viewed course.
- The implementation safely handles the possibility of `undefined`.

### 2. Doubt Queue

The `DoubtQueue` class uses an array as a queue.

- `enqueue()` adds a doubt to the queue.
- `dequeue()` removes and returns the first doubt.
- The return type safely handles the possibility of `undefined`.

### 3. Trainee Search

The `searchTraineeById()` function uses binary search to find a trainee by ID.

The trainee IDs are numbers, so the search parameter is also typed as `number`.

The function returns the matching trainee or `null` when the trainee is not found.

### 4. Learning Path Tree

The learning path is represented using a tree structure.

Each node contains:

- Course name
- Child learning paths

The tree is displayed using preorder traversal.

## Bugs Fixed

Three bugs were identified and corrected:

1. The `pop()` method could return `undefined`, so its return type was changed to `string | undefined`.
2. The `dequeue()` method could return `undefined`, so its return type was changed to `string | undefined`.
3. The `traineeId` parameter in binary search was incorrectly declared as `string`. It was changed to `number` to match the `Trainee` interface.

## Technologies Used

- TypeScript
- Node.js
- TypeScript interfaces
- Arrays
- Stack
- Queue
- Binary Search
- Tree
- Preorder Traversal

## How to Run

Compile the TypeScript file:

```bash
tsc training-management-system.ts
```

Run the generated JavaScript file:

```bash
node training-management-system.js
```

## Expected Output

```text
Recently Viewed: React
Doubt: What is an interface?
Trainee: { traineeId: 102, name: 'Priya', course: 'JavaScript' }
Learning Path:
Programming
JavaScript
TypeScript
Generics
```

## Conclusion

The Training Management System successfully demonstrates TypeScript type safety and common data structure operations. The identified bugs were fixed without changing the intended functionality of the application.