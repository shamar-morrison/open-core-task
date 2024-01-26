import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines the provided class values into a single string,
 * merging and deduplicating classes using Tailwind CSS logic.
 *
 * This function is a utility that leverages the `clsx` and `twMerge` libraries.
 * It first uses `clsx` to compute a `className` string from the provided inputs,
 * which can include strings, objects, or arrays, and can contain conditional logic.
 * It then uses `twMerge` to process the result as Tailwind CSS classes.
 *
 * @example
 * const isActive = true;
 * const className = cn(
 *   'base-class',
 *   isActive && 'active-class',
 *   !isActive && 'inactive-class',
 * );
 * // className is now 'base-class active-class'
 *
 * @param inputs - The classes to combine.
 * @returns A single string containing all provided classes, processed according to Tailwind CSS logic.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
