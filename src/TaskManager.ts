/**
 * TaskManager.ts - Manages a typed list of Task objects
 * Author: Farhan
 * Description: Demonstrates TypeScript classes, typed arrays (lists),
 *              list operations (filter, map, sort, reduce), recursion,
 *              and custom error handling.
 */

import { Task } from "./Task";

/**
 * Custom error thrown when a task is not found by id.
 * Demonstrates throwing typed custom errors in TypeScript.
 */
export class TaskNotFoundError extends Error {
  constructor(id: number) {
    super(`Task with id=${id} does not exist in the task list.`);
    this.name = "TaskNotFoundError";
  }
}

/**
 * Manages a list of Task objects.
 * Demonstrates TypeScript classes, typed arrays, and list operations.
 */
export class TaskManager {
  // Typed array (list) of Task objects - demonstrates Lists requirement
  private tasks: Task[] = [];

  /**
   * Adds a new task to the list.
   * @param task - The Task object to add
   */
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  /**
   * Removes a task by id. Throws TaskNotFoundError if not found.
   * Demonstrates throwing and handling custom typed exceptions.
   * @param id - The id of the task to remove
   */
  removeTask(id: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new TaskNotFoundError(id);
    }
    this.tasks.splice(index, 1);
  }

  /**
   * Marks a task as completed by id.
   * @param id - The id of the task to mark complete
   */
  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  /**
   * Returns all tasks in the list.
   * Demonstrates returning a typed array.
   */
  getAllTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Filters tasks by priority level using Array.filter().
   * Demonstrates list filtering operation.
   * @param priority - The priority level to filter by
   */
  filterByPriority(priority: "high" | "medium" | "low"): Task[] {
    return this.tasks.filter((t) => t.priority === priority);
  }

  /**
   * Returns tasks sorted by due date (ascending) using Array.sort().
   * Demonstrates list sorting operation.
   */
  sortByDueDate(): Task[] {
    return [...this.tasks].sort((a, b) =>
      a.dueDate.localeCompare(b.dueDate)
    );
  }

  /**
   * Counts tasks by priority using Array.reduce().
   * Demonstrates list aggregation (reduce) operation.
   * Returns an object with counts for high, medium, and low.
   */
  countByPriority(): { high: number; medium: number; low: number } {
    return this.tasks.reduce(
      (acc, task) => {
        acc[task.priority]++;
        return acc;
      },
      { high: 0, medium: 0, low: 0 }
    );
  }

  /**
   * Recursively searches through the task list to find a task by id.
   * Demonstrates recursion on a list structure.
   * @param id - The id to search for
   * @param index - Current index in the recursive search (default 0)
   */
  findTaskById(id: number, index: number = 0): Task | null {
    // Base case: we have searched the entire list
    if (index >= this.tasks.length) {
      return null;
    }
    // Base case: found the task
    if (this.tasks[index].id === id) {
      return this.tasks[index];
    }
    // Recursive case: search the rest of the list
    return this.findTaskById(id, index + 1);
  }

  /**
   * Prints a list of tasks to the terminal in a readable format.
   * Demonstrates display output and using Array.map().
   * @param tasks - The list of tasks to print
   */
  printTasks(tasks: Task[]): void {
    if (tasks.length === 0) {
      console.log("  (no tasks)");
      return;
    }
    tasks.map((t) => console.log("  " + t.toString()));
  }
}