/**
 * Task.ts - Defines the Task class with typed properties
 * Author: Farhan
 * Description: A TypeScript class representing a single task in the task manager.
 */

/**
 * Represents a single task with typed properties.
 * Demonstrates TypeScript classes and type annotations.
 */
export class Task {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  completed: boolean;

  /**
   * Creates a new Task instance.
   * @param id - Unique identifier for the task
   * @param title - Description of the task
   * @param priority - Priority level: high, medium, or low
   * @param dueDate - Due date string in YYYY-MM-DD format
   */
  constructor(
    id: number,
    title: string,
    priority: "high" | "medium" | "low",
    dueDate: string
  ) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
  }

  /**
   * Returns a formatted string summary of the task.
   */
  toString(): string {
    const status = this.completed ? "[DONE]" : "[    ]";
    return `${status} #${this.id} | ${this.priority.toUpperCase().padEnd(6)} | ${this.dueDate} | ${this.title}`;
  }
}