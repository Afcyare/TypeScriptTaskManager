# TypeScript Task Manager CLI

## Overview

As a software developer in training, I want to build real, working projects that push me to learn new languages properly — not just follow tutorials, but actually understand what I am writing. This project is my first TypeScript program, built from scratch as part of my Applied Programming course at BYU-Idaho (via BYU-Pathway).

This is a command-line Task Manager application written in TypeScript. It lets you add tasks, list them, filter by priority, sort by due date, mark them as complete, and remove them — all from the terminal. The project is designed to demonstrate several core TypeScript features in one cohesive program: classes, typed lists, recursion, async/await, and custom error handling.

I chose this project because I wanted something practical that I could actually use, not just a toy demo. A task manager is something every student needs, and building it in TypeScript forced me to think carefully about types and structure from the very beginning.

[Software Demo Video](https://www.youtube.com/watch?v=lhsKXhVlX0E)

## Development Environment

- **Code Editor:** Visual Studio Code
- **Runtime:** Node.js v20
- **Language:** TypeScript 5
- **Tools:** ts-node (run TypeScript directly), tsc (TypeScript compiler)
- **Operating System:** Ubuntu (Linux)

## How to Run

1. Make sure you have Node.js installed: https://nodejs.org/
2. Install TypeScript and ts-node globally:
   ```
   npm install -g typescript ts-node
   ```
3. Clone this repository:
   ```
   git clone https://github.com/Afcyare/TypeScriptTaskManager
   cd TypeScriptTaskManager
   ```
4. Install project dependencies:
   ```
   npm install
   ```
5. Run the program:
   ```
   npm start
   ```
   Or directly with ts-node:
   ```
   ts-node src/index.ts
   ```

## TypeScript Features Demonstrated

| Requirement | File | Description |
|---|---|---|
| Display output to terminal | `index.ts`, `TaskManager.ts` | All results printed with console.log in formatted output |
| Recursion | `recursion.ts`, `TaskManager.ts` | Recursive Fibonacci with memoization; recursive list search by id |
| Classes | `Task.ts`, `TaskManager.ts` | Task class with typed properties; TaskManager class with methods |
| Lists | `TaskManager.ts` | Typed Task[] array with .filter(), .map(), .sort(), .reduce() |
| Asynchronous functions | `api.ts` | async/await fetch from quotable.io REST API with typed response |
| Throw and handle exceptions | `TaskManager.ts`, `index.ts` | Custom TaskNotFoundError thrown and caught with try/catch |

## Project Structure

```
TypeScriptTaskManager/
├── src/
│   ├── index.ts        ← Main entry point, runs all demonstrations
│   ├── Task.ts         ← Task class with typed properties
│   ├── TaskManager.ts  ← TaskManager class, list operations, custom error
│   ├── recursion.ts    ← Recursive Fibonacci function
│   └── api.ts          ← Async function to fetch quote from public API
├── tsconfig.json       ← TypeScript compiler configuration
├── package.json        ← Project dependencies and scripts
└── README.md
```

## Useful Websites

* [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Node.js Download](https://nodejs.org/)
* [ts-node Documentation](https://typestrong.org/ts-node/)
* [MDN Web Docs - async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
* [quotable.io API](https://github.com/lukePeavey/quotable)
* [Wikipedia - TypeScript](https://en.wikipedia.org/wiki/TypeScript)