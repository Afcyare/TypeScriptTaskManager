/**
 * api.ts - Demonstrates asynchronous functions in TypeScript
 * Author: Farhan
 * Description: An async function that fetches a motivational quote
 *              from a free public REST API using async/await.
 */

/**
 * Interface defining the shape of the API response.
 * Demonstrates TypeScript interfaces and type safety.
 */
interface QuoteResponse {
  _id: string;
  quote: string;
  author: string;
}

/**
 * Asynchronously fetches a random motivational quote from the
 * quotable.io public REST API and prints it to the terminal.
 *
 * Demonstrates:
 *  - async/await syntax
 *  - TypeScript typed API response (interface)
 *  - try/catch error handling for async operations
 */
export async function fetchQuote(): Promise<void> {
  try {
    console.log("  Fetching a motivational quote for you...");

    // Async fetch call - waits for the response before continuing
      const response = await fetch("https://dummyjson.com/quotes/random");

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    // Await the JSON parsing - also asynchronous
    const data: QuoteResponse = await response.json();

    console.log(`\n  "${data.quote}"`);
    console.log(`  — ${data.author}\n`);
  } catch (error: unknown) {
    // Handle network errors or API failures gracefully
    if (error instanceof Error) {
      console.log(`  Could not fetch quote: ${error.message}`);
      console.log(`  (This is okay - it just means the API was unreachable)\n`);
    }
  }
}