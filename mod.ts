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
export * from "jsr:@std/fmt@^0.224.0/colors"

// greet.ts
/**
 * Greet a person.
 * @param name The name of the person to greet.
 */
export function greet(name: string): string {
    return ""
}
