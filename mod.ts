// mod.ts
/**
 * A module providing a function to greet people.
 *
 * @example
 * ```ts
 * import { greet } from "@mkusaka/greet";
 *
 * greet("Mkusaka");
 * ```
 *
 * @module
 */

export * from "./greet.ts";
export * from "npm:chalk@^5.3.0"

// greet.ts
/**
 * Greet a person.
 * @param name The name of the person to greet.
 */
export function greet(name: string): string {
    return ""
}
