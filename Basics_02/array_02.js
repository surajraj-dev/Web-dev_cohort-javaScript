
// ✅ Merging Two Arrays

const fruits = ["Apple", "Banana", "Mango"];
const vegetables = ["Carrot", "Potato", "Tomato"];

// ❌ `push()` ka use karne se pura array ek element ban jata hai
// fruits.push(vegetables);
// console.log(fruits); // ["Apple", "Banana", "Mango", ["Carrot", "Potato", "Tomato"]]
// console.log(fruits[3][1]); // "Potato" (Nested array access)


//********************************** 1️⃣ concat() → Merges Arrays***************************************

const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]


// **********************************2️⃣ Spread (...) → Expands & Merges Arrays*****************************


const result2 = [...arr1, ...arr2];
console.log(result2); // [1, 2, 3, 4]


// *********************************3️⃣ flat() → Flattens Nested Arrays********************************

const nestedArr = [1, [2, 3], [4, [5, 6]]];
const flatArr = nestedArr.flat(Infinity);
console.log(flatArr); // [1, 2, 3, 4, 5, 6]



console.log("-----------------✅ Converting to Arrays-------------------------------");


// ✅ Checking if a value is an array
console.log("Is 'Suraj' an array?", Array.isArray("Suraj")); // false

// ✅ Converting a string to an array
console.log("String to array:", Array.from("Suraj")); // ['S', 'u', 'r', 'a', 'j']

// ✅ Attempting to convert an object to an array (⚠️ Doesn't work directly)  😊interesting
console.log("Object to array:", Array.from({ name: "Suraj" })); // []
  
//       ************************✅solution ********************************

    /*      
           Object.keys(user) → Converts keys to an array.
            Object.values(user) → Converts values to an array.
            Object.entries(user) → Converts key-value pairs into an array.
 */
                    const user = { name: "Suraj" };

                    console.log("Keys Array:", Object.keys(user));     // ["name"]
                    console.log("Values Array:", Object.values(user)); // ["Suraj"]
                    console.log("Entries Array:", Object.entries(user)); // [["name", "Suraj"]]





// ✅ Creating an array from individual values
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));