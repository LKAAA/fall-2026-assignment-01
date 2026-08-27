# Assignment 1: TypeScript Fundamentals

**Total Points:** 20 Points (Exercises 1–10: 1 point each | Exercises 11–15: 2 points each)

---

## Overview

This assignment is split into two parts:

- **Module 1 (Exercises 1–10):** Focuses on **TypeScript’s unique type system**, structural typing, compile-time safety, and functional array manipulation. (1 point each)
- **Module 2 (Exercises 11–15):** Introduces **Asynchronous Programming in TypeScript**, teaching you how to manage non-blocking operations, execute concurrent processes, handle promises gracefully, and interface with external resources. (2 points each)

### Ground Rules & Constraints

- **Use Types Over Interfaces:** Throughout this entire assignment, define your object shapes and data structures using the `type` alias keyword rather than the `interface` keyword.
- **Module 1 Sync Constraint:** For Exercises 1 through 10, do not use asynchronous constructs (`async`, `await`, or `Promises`). Use synchronous Node.js built-ins (e.g., `fs.readFileSync`) if I/O is required.
- **Module 2 Async Requirements:** For Exercises 11 through 15, you must use modern `async/await` syntax for handling non-blocking tasks. Use promise-based Node.js modules (e.g., `fs.promises`) or fetch utilities.
- **Strict Type Safety:** Avoid using the `any` type. The goal is to let the TypeScript compiler help you catch errors before execution.
- **Testing & Export Requirements:** To ensure your solutions can be verified by the automated test suite, **you must use named exports** for all required functions, classes, and types (e.g., `export function ...` or `export type ...`). **Do not use `export default`**.
- **Best Practice Note:** In production-ready TypeScript, any custom type used as a parameter or return type in an exported function/method **must also be exported**. This allows consuming modules to correctly type their variables when interacting with your code. Ensure you follow this rule throughout the entire assignment.

---

## Repository Structure

Your workspace is organized as follows:

```text
├── data/
│   ├── gradebook.json       # Provided data for Exercise 7
│   └── logs.txt             # Placeholder target for Exercise 11
├── src/
│   ├── exercise01.ts         # Add your solution here
│   ├── exercise02.ts
│   │   ...
│   └── exercise15.ts
└── tests/                   # Automated test suites
```

---

## Development & Testing

- **Scratchpad:** You can use `src/index.ts` as a scratchpad to manually test your code. Import your functions from the exercise files and use `console.log` to verify their behavior.
- **Running Your Code:** To execute `src/index.ts`, run the following command in your terminal:
  ```bash
  npm run dev
  ```
- **Running Automated Tests:** To run the official test suite, use:
  ```bash
  npm test
  ```

---

## Module 1: The TypeScript Type System (1 Point Each)

### Exercise 1: The Nullable Name Formatter

- **File:** `src/exercise01.ts`
- **Concepts:** Basic types, Union types, Strict null checks.
- **Description:** In TypeScript, `undefined` and `null` are distinct types. Write and export a function with the following signature:

```typescript
export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string;
```

If `middleName` is provided, is not `null`, and is not an empty string, the function must return `LastName, FirstName M.`. Otherwise, it should return `LastName, FirstName`.

---

### Exercise 2: DNA/RNA Transcription

- **File:** `src/exercise02.ts`
- **Concepts:** Custom Errors.
- **Description:** Write and export a function with the following signature:

```typescript
export function transcribeDNA(dna: string): string;
```

The function accepts a sequence string and returns its RNA complement based on the standard rules:

- `A` -> `U`
- `T` -> `A`
- `C` -> `G`
- `G` -> `C`

If the input string contains any character that is not a valid DNA nucleotide, throw a custom error.

---

### Exercise 3: Functional Inventory Metrics

- **File:** `src/exercise03.ts`
- **Concepts:** Tuples, Array Methods (`.map`, `.filter`, `.reduce`), Arrow Functions.
- **Description:** You are given an array of warehouse inventory items, where each item is represented as a strictly typed tuple matching the layout: `[itemName: string, quantity: number, pricePerUnit: number]`.
- **Constraint:** Without using standard loop constructs (`for`, `while`, or `forEach`), write and export a function with the following signature:

```typescript
export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number;
```

The function must calculate and return the total dollar value of the inventory, but _only_ for items that have a remaining quantity greater than 5.

---

### Exercise 4: Shape Area Calculator

- **File:** `src/exercise04.ts`
- **Concepts:** Discriminated Unions and Type Narrowing.
- **Description:** Define and export distinct object types using the `type` keyword for a `Circle` (requires a `radius`), a `Rectangle` (requires `width` and `height`), and a `Square` (requires `sideLength`).
- **Task:** Add a literal `kind` property to each object definition to create and export a Discriminated Union type named `Shape`. Write and export a function with the following signature:

```typescript
export function calculateArea(shape: Shape): number;
```

The function must use type narrowing to properly compute and return the area based on the shape's `kind`.

---

### Exercise 5: The Config Merger

- **File:** `src/exercise05.ts`
- **Concepts:** Intersection types (`&`) and Partial utility types (`Partial<T>`).
- **Description:** Define and export two separate object types:

1. `NetworkConfig`: Requires fields `serverUrl` (string) and `port` (number).
2. `EnvironmentConfig`: Requires fields `environment` (either `'dev'` or `'prod'`) and `timeout` (number).

- **Task:** Create and export an intersection type called `AppConfig` that combines both configurations using the `&` operator. Then, write and export a function with the following signature:

```typescript
export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig;
```

The function takes an object of partial user settings and merges them with a hardcoded default configuration object containing these exact fallbacks:

- `serverUrl: "http://localhost"`
- `port: 8080`
- `environment: "dev"`
- `timeout: 3000`

---

### Exercise 6: Generic Stack Data Structure

- **File:** `src/exercise06.ts`
- **Concepts:** Generics and Classes.
- **Description:** Implement and export a fully generic `Stack<T>` class to encapsulate a Last-In, First-Out (LIFO) structure. Your class must implement and expose the following signature:

```typescript
export class Stack<T> {
  public push(item: T): void;
  public pop(): T | undefined;
  public peek(): T | undefined;
  public size(): number;
}
```

---

### Exercise 7: Gradebook Parser

- **File:** `src/exercise07.ts`
- **Concepts:** Structural Typing, Index Signatures, Synchronous File System I/O.
- **Description:** You need to parse an unstructured gradebook data dump. At the root of your repository, you will find a JSON data file located at `data/gradebook.json`. The JSON structure maps student names dynamically to nested objects containing their subjects and numerical grades:

```json
{
  "Alice": { "Math": 95, "History": 88 },
  "Bob": { "Math": 70 }
}
```

- **Task:** Use `fs.readFileSync` to read this file synchronously. Define and export an object type named `Gradebook` using **index signatures** to cleanly represent this open-ended data structure. Write and export a function with the following signature:

```typescript
export function calculateSubjectAverage(subject: string): number;
```

The function must load the JSON file, parse it using your `Gradebook` contract, and calculate the average score for the given subject across all students who enrolled in it.

---

### Exercise 8: The Dynamic Event Emitter

- **File:** `src/exercise08.ts`
- **Concepts:** Keyof operator, Lookup types (`T[K]`), and Mapped Types.
- **Description:** Create a lightweight, type-safe event broadcasting class called `SimpleEventEmitter`. Your class should receive a generic type parameter restricted to an event map schema.
- **Task:** Define and export the following target `EventMap` type structure exactly as shown:

```typescript
export type EventMap = {
  launch: string;
  shutdown: number;
};
```

Your exported class must match the following signature template:

```typescript
export class SimpleEventEmitter<T extends EventMap> {
  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void;
  public emit<K extends keyof T>(eventName: K, data: T[K]): void;
}
```

Implement the methods so that handlers and data arguments are strictly bound to the definitions inside the generic event map parameter.

---

### Exercise 9: User Roles Type Guard

- **File:** `src/exercise09.ts`
- **Concepts:** Custom Type Guards (`is` operator) and Collection Filtering.
- **Description:** Define and export two distinct object types:
- `AdminUser`: Contains an `adminId` (string) and an array of `permissions` (strings).
- `GuestUser`: Contains a `guestToken` (string) and an expiration timestamp `expiresAt` (Date).

- **Task:** Write and export a custom type guard function and a filter utility with the following exact signatures:

```typescript
export function isAdmin(user: AdminUser | GuestUser): user is AdminUser;
export function extractAdmins(users: Array<AdminUser | GuestUser>): AdminUser[];
```

The `extractAdmins` function must accept an array of mixed elements and use your `isAdmin` type guard inside a functional `.filter()` call to safely isolate and return _only_ an array of `AdminUser` objects.

---

### Exercise 10: The Secure Entity Registry

- **File:** `src/exercise10.ts`
- **Concepts:** Readonly properties, Mapped Utility Types (`Pick`, `Omit`), Object Mutation Safety.
- **Description:** You are building an internal datastore layer. Define and export a base object type for a `UserAccount` containing the following fields: `id` (string), `createdAt` (Date), `email` (string), `passwordHash` (string), and a nested `profile` object containing a `bio` (string) and `avatarUrl` (string).
- **Task:** Implement and export a registry class named `UserRegistry` managing an internal collection of these records. Your class must match the following signature:

```typescript
export class UserRegistry {
  public registerUser(data: Omit<UserAccount, 'id' | 'createdAt'>): UserAccount;
  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined;
}
```

- `registerUser` receives the raw data fields, generates a unique string `id` and a current timestamp `createdAt` internally, updates the internal record collection, and returns the **complete** created `UserAccount` object.
- `getUserView` queries the collection by ID and returns a strictly read-only public projection of the user data. It must omit the `passwordHash` field and mark the remaining fields as immutable via TypeScript utility types.

---

## Module 2: Asynchronous TypeScript (2 Points Each)

### Exercise 11: Async Log Writer

- **File:** `src/exercise11.ts`
- **Concepts:** Promises, Promise Return Types, Non-blocking I/O.
- **Description:** Transitioning from synchronous operations, you will now use Node's promise-based file system API (`fs.promises`). Write and export an asynchronous function that writes a timestamped status message string to a local file.
- **Task:** Implement and export a function matching the signature below:

```typescript
export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void>;
```

The function must take the incoming message, append the current ISO date string to it, and write it cleanly to the designated `filePath` without blocking the main event thread.

---

### Exercise 12: Network Fetcher & Data Mapping

- **File:** `src/exercise12.ts`
- **Concepts:** Network I/O (`fetch`), JSON Parsing, Type Modeling.
- **Description:** Fetch data from an external REST API and cleanly model the response. You will query the public JSONPlaceholder endpoint to pull down user profiles.
- **Task:** Define and export a type named `RemoteUser` to model the incoming payload (capturing `id` as a number, `name` as a string, and `email` as a string). Write and export a function with the following signature:

```typescript
export async function fetchUserEmails(): Promise<string[]>;
```

The function must fetch JSON data from `https://jsonplaceholder.typicode.com/users`, map the parsed payload into an array of strictly typed `RemoteUser` records, and return an array containing only the extracted email strings.

---

### Exercise 13: Resilient Network Fetcher with Error Fallbacks

- **File:** `src/exercise13.ts`
- **Concepts:** Asynchronous Exception Handling, Network Error Recovery, Default Projections.
- **Description:** Asynchronous tasks are vulnerable to runtime network failures. You need to write a wrapper around an HTTP request that handles errors gracefully.
- **Task:** Define and export a type named `TodoItem` (capturing `userId` as a number, `id` as a number, `title` as a string, and `completed` as a boolean). Write and export a function with the following signature:

```typescript
export async function fetchTodoSafe(todoId: number): Promise<TodoItem | null>;
```

Your function should attempt to fetch a specific item from `https://jsonplaceholder.typicode.com/todos/${todoId}`. If the HTTP request fails, or if a non-200 status code is received, catch the exception and safely return `null` instead of crashing the program.

---

### Exercise 14: Concurrent Batch Aggregator

- **File:** `src/exercise14.ts`
- **Concepts:** Concurrency Control (`Promise.all`), Parallel Execution.
- **Description:** Sequential execution of multiple async network requests creates severe performance bottlenecks. You will write an optimization utility to run multiple fetch operations concurrently.
- **Task:** Define and export a type named `PostItem` containing `id` (number), `title` (string), and `body` (string). Write and export a function with the following signature:

```typescript
export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]>;
```

Given an array of raw post IDs, execute all requests concurrently using `Promise.all` targeting `https://jsonplaceholder.typicode.com/posts/${id}`. Ensure the application waits for all responses to finish before processing and returning the aggregated array of typed results.

---

### Exercise 15: The Asynchronous Data Pipeline

- **File:** `src/exercise15.ts`
- **Concepts:** Compound Async Flows, Data Transformations, Serialization.
- **Description:** Combine network ingestion, validation tracking, complex array mapping, and disk storage operations together into a clean, unified, asynchronous transactional lifecycle pipeline.
- **Task:** Define and export a type named `CommentSummary` containing a `postId` (number), an `id` (number), and a trimmed `commenterEmail` (string). Write and export a function with the following signature:

```typescript
export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number>;
```

Your function must systematically execute the following processing pipeline:

1. Fetch the collection of comments belonging to a post from: `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`
2. Parse the payload and map it into an array of your exported `CommentSummary` structures.
3. Filter out any records where the email domain ends with `.org`.
4. Serialize the surviving filtered results to JSON format and write the resulting string asynchronously to the specified `outputPath`.
5. Return the final `number` count of processed records that were successfully saved to disk.
