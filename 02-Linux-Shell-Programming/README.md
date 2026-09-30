# Linux Shell Programming

## Overview

This module introduced Linux shell programming with a focus on Bash, command-line operations, shell scripting, automation, and working with processes and input/output streams.

## Topics Covered

### 1. Bash Shell
- Introduction to Bourne Again Shell (Bash)
- Interactive and non-interactive shells
- Command-line interface
- Command parsing
- Exit status codes
- Control structures
- Pipelines
- Signals and inter-process communication
- Asynchronous execution
- Jobs and job control

### 2. Bash Scripting
- Creating `.sh` shell script files
- Shebang (`#!/bin/bash`)
- Executing shell scripts
- Making scripts executable using `chmod +x`
- Running scripts using `./script.sh`
- Running scripts using `bash script.sh`

### 3. Variables and Quoting
- Shell variables
- Variable expansion
- Double quotes
- Command substitution
- Arithmetic expansion
- Escape characters
- Backslash escaping

### 4. Command-Line Arguments
- Passing arguments to shell scripts
- `$0` - script name
- `$1`, `$2`, etc. - positional arguments
- Using command-line arguments in scripts

### 5. Input and Output
- Standard input (`stdin`)
- Standard output (`stdout`)
- Standard error (`stderr`)
- File descriptors
- Input and output redirection
- Here documents

### 6. Pipes
- Using the pipe (`|`) operator
- Connecting the output of one command to the input of another
- Difference between pipes and redirections

### 7. Conditional Expressions
- Testing file attributes
- Checking whether files and directories exist
- Readable, writable and executable file checks
- String comparisons
- Arithmetic comparisons

### 8. Control Structures
- Conditional statements
- Iteration and loops
- Using conditions and loops in Bash scripts

### 9. Functions
- Defining Bash functions
- Calling functions
- Reusing commands through functions

### 10. Regular Expressions
- Introduction to regular expressions
- Metacharacters
- Pattern matching
- Text searching
- String manipulation
- Extended regular expressions

### 11. Vim Editor
- Insert mode
- Escape/command mode
- Creating and editing files
- Saving files using `:w`
- Saving and quitting using `:wq`
- Quitting without saving using `:q!`

### 12. Debugging Bash Scripts
- Debugging using `bash -x`
- Using `set -x`
- Disabling tracing using `set +x`

## Key Commands and Concepts

```bash
pwd
ls
cd
mkdir
touch
cat
chmod
echo
bash
grep