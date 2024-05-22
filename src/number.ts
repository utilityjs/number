

/**
 * Generates a random number between min (inclusive) and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @param {boolean} [floating=false] - If true, generates a floating-point number.
 * @returns {number} - The random number.
 */
export function random(min: number, max: number, floating = false) {
  if (floating) {
    // Generate a floating-point number
    return Math.random() * (max - min) + min;
  } else {
    // Generate an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

