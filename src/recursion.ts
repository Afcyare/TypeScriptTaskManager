/**
 * recursion.ts - Demonstrates recursion in TypeScript
 * Author: Farhan
 * Description: A recursive Fibonacci function with memoization
 *              to demonstrate the recursion requirement for this module.
 */

// Cache object to store previously computed Fibonacci values (memoization)
const memo: { [key: number]: number } = {};

/**
 * Recursively calculates the nth Fibonacci number using memoization.
 * Demonstrates recursion - the function calls itself with a smaller input
 * until it reaches a base case.
 *
 * @param n - The position in the Fibonacci sequence (0-indexed)
 * @returns The nth Fibonacci number
 *
 * Examples:
 *   fibonacci(0) = 0
 *   fibonacci(1) = 1
 *   fibonacci(6) = 8
 */
export function fibonacci(n: number): number {
  // Base cases: first two numbers in the sequence
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Return cached result if already computed
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Recursive case: sum of the two preceding numbers
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}