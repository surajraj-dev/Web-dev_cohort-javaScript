console.log(10 > 5 && 8 > 3);  // true (AND: both conditions are true)

console.log(5 > 10 || 8 > 3);  // true (OR: one condition is true)

console.log(!(5 > 10));        // true (NOT: reverses false to true)

console.log(true && false || true); // true (AND executes first, then OR)

let age = 20; 
console.log(age >= 18 ? "Adult" : "Minor"); // "Adult" (Ternary Operator)

let user = null;
 console.log(user || "Guest"); // "Guest" (OR used for default value)

let isMember = true; 
console.log(isMember && "Welcome!"); // "Welcome!" (AND used for conditional execution)

// *********************************************************************************************************


/**           
                         Difference Between == and === in JavaScript
 
            1️⃣ == (Equality Operator - Loose Comparison)
               ✅ Compares values after type conversion (coercion).
               ✅ If the types are different, JavaScript converts them before comparison.

            2️⃣ === (Strict Equality Operator - Strict Comparison)
                ✅ Compares both value and type without conversion.
                ✅ If types are different, it immediately returns false.
 */

console.log(5 == "5");  // true (string "5" is converted to number 5 )


console.log(5 === "5");  // false (different types: number vs string)