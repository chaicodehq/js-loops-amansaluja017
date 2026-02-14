/**
 * 🎨 Priya ki Diwali Rangoli
 *
 * Priya Diwali pe rangoli banati hai. Uska pattern ek diamond shape mein
 * hota hai stars (*) ka. Tu usse help kar pattern generate karne mein!
 *
 * Rules (use nested for loops):
 *   - Input n determines the size of the diamond
 *   - The diamond has 2n - 1 rows total
 *   - Row i (1-indexed) of the top half has i stars
 *   - Row i of the bottom half mirrors the top
 *   - Stars are separated by a single space
 *   - Each row has leading spaces for center alignment
 *   - The widest row has n stars: "* * * ... *" (2n-1 chars wide)
 *   - No trailing spaces on any row
 *
 * Pattern for n=3:
 *     *
 *   * *
 *   * * *
 *   * *
 *     *
 *
 * (Each row is a string in the returned array)
 *
 * Validation:
 *   - Agar n positive integer nahi hai (0, negative, decimal, non-number),
 *     return empty array []
 *
 * @param {number} n - Size of the diamond (number of stars in the widest row)
 * @returns {string[]} Array of strings forming the diamond pattern
 *
 * @example
 *   rangoli(1) // => ["*"]
 *   rangoli(2) // => [" *", "* *", " *"]
 *   rangoli(3) // => ["  *", " * *", "* * *", " * *", "  *"]
 */
export function rangoli(n) {
  let response = [];

  if (typeof (n) !== "number" || !n || !Number.isInteger(n)) return response;


  for (let i = 0; i < n; i++) {
    let top = "";
    for (let j = 0; j < n - i - 1; j++) {
      top += " "
    }
    top += "*"

    for (let j = 0; j < i; j++) {
      top += " *"
    }
    response.push(top)

  }

  for (let i = 0; i < n - 1; i++) {
    let bottom = "";
    for (let j = 0; j < i + 1; j++) {
      bottom += " "
    }
    bottom += "*"

    for (let j = 0; j < n - i - 2; j++) {
      bottom += " *"
    }
    response.push(bottom)
  }

  return response
}
