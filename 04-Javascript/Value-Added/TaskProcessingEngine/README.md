# Task Processing Engine

## 1. Project Overview

This project demonstrates a JavaScript Task Processing Engine for managing and processing employee tasks.

The application uses callback functions, arrow functions, closures, custom iterators, generators, and reusable processing functions to process task information and generate reports.

## 2. Features Implemented

- Reusable callback-based task processor
- Multiple callback functions
- Arrow functions
- Custom task iterator
- Task counter using closure
- Priority display callback
- Status display callback
- Employee display callback
- Task summary generation
- Task generator using generator functions
- Generic task reporting engine

## 3. Bugs Fixed

- Converted traditional functions into arrow functions where applicable.
- Replaced the `for...in` loop with `for...of` for proper task object iteration.
- Improved the task processing function to support reusable callbacks.
- Corrected the task processing structure to make the implementation easier to extend.
- Added reusable callback functions for task priority, status, and employee information.
- Added proper iterator handling for sequential task processing.
- Added closure-based task counting.
- Added generator-based task processing.
- Added a reusable task summary and reporting mechanism.

## 4. How To Execute

Make sure Node.js is installed on the system.

Open the project folder in the terminal and run:

```bash
node task-processing-engine.js