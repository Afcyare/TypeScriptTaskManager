/**
 * index.ts - Main entry point for the TypeScript Task Manager CLI
 * Author: Farhan
 * Description: Demonstrates TypeScript features including classes, lists,
 *              recursion, async/await, and custom error handling.
 */

import { TaskManager } from "./TaskManager";
import { Task } from "./Task";
import { fibonacci } from "./recursion";
import { fetchQuote } from "./api";

/**
 * Main function - runs all demonstrations in sequence
 */
async function main(): Promise<void> {
  console.log("===========================================");
  console.log("  TypeScript Task Manager CLI");
  console.log("  CSE 310 - Module 1 - Farhan");
  console.log("===========================================\n");

  // ── 1. Recursion Demo ─────────────────────────────────────────────────
  console.log("--- Recursion: Fibonacci Sequence ---");
  for (let i = 0; i <= 10; i++) {
    console.log(`  fib(${i}) = ${fibonacci(i)}`);
  }
  console.log();

  // ── 2. Classes & Lists Demo ───────────────────────────────────────────
  console.log("--- Task Manager: Classes & Lists ---");
  const manager = new TaskManager();

  // Add tasks using the TaskManager class
  manager.addTask(new Task(1, "Learn TypeScript types and interfaces", "high", "2026-05-10"));
  manager.addTask(new Task(2, "Write recursive Fibonacci function", "medium", "2026-05-11"));
  manager.addTask(new Task(3, "Build TaskManager class with typed list", "high", "2026-05-12"));
  manager.addTask(new Task(4, "Implement async fetch from public API", "medium", "2026-05-13"));
  manager.addTask(new Task(5, "Add custom error handling", "low", "2026-05-14"));
  manager.addTask(new Task(6, "Write README and record video", "high", "2026-05-15"));

  console.log("\nAll tasks:");
  manager.printTasks(manager.getAllTasks());

  // List operations: filter by priority
  console.log("\nHigh priority tasks only (filter):");
  manager.printTasks(manager.filterByPriority("high"));

  // List operations: sort by due date
  console.log("\nAll tasks sorted by due date:");
  manager.printTasks(manager.sortByDueDate());

  // Mark a task complete
  manager.completeTask(1);
  console.log("\nAfter marking task #1 complete:");
  manager.printTasks(manager.getAllTasks());

  // List operations: count using reduce
  const counts = manager.countByPriority();
  console.log(`\nTask count by priority:`);
  console.log(`  High: ${counts.high} | Medium: ${counts.medium} | Low: ${counts.low}`);

  // Recursive sub-task search demo
  console.log("\nSearching for task with id=3 (recursive search):");
  const found = manager.findTaskById(3);
  console.log(found ? `  Found: "${found.title}"` : "  Not found");

  // ── 3. Exception Handling Demo ────────────────────────────────────────
  console.log("\n--- Custom Error Handling ---");
  try {
    // Intentionally try to remove a task that does not exist
    manager.removeTask(999);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`  Caught error: ${error.message}`);
    }
  }

  // Remove a task that does exist - no error
  manager.removeTask(5);
  console.log("  Task #5 removed successfully.");
  console.log(`  Tasks remaining: ${manager.getAllTasks().length}`);

  // ── 4. Async Function Demo ────────────────────────────────────────────
  console.log("\n--- Async Function: Fetching Motivational Quote ---");
  await fetchQuote();

  console.log("\n===========================================");
  console.log("  All demonstrations complete!");
  console.log("===========================================");
}

// Run the main function
main().catch((err) => {
  console.error("Unexpected error:", err);
  throw err;
});