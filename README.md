# TypeScript Type Error: Incorrect Argument Type

This repository demonstrates a common type error in TypeScript where a function expects a specific type of argument, but receives an argument of a different type.  The error is caused by passing an array of strings to a function that expects a single string.

## Bug

The `bug.ts` file contains a function `greeter` that expects a string argument. However, the code attempts to pass an array of strings to the function, resulting in a compilation error.

## Solution

The `bugSolution.ts` file demonstrates how to fix this issue by either modifying the function signature to accept an array or by modifying the variable to provide a single string.

## How to run

1. Clone this repository.
2. Navigate to the directory.
3. Run the command `tsc bug.ts` to compile the buggy code.
4. Run the command `tsc bugSolution.ts` to compile the fixed code.
5. Observe the compilation errors in the first case and the successful compilation in the second.