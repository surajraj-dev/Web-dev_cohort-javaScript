
/*
            📌 1️⃣ Array Definition
            An array in JavaScript is a data structure that allows you to store multiple values in a single 
            variable, organized in an ordered collection. Each element in an array is assigned an index
             starting from 0.
            
             :-> it is also a specialtype of object.


*/
//********************************************************************************************** */
/*
📌 Common Array Methods

push()	   :->    Adds element at the end of the index .
pop()	   :->    Removes last element in array  .   arr.pop()
unshift()  :->    Adds element at the beginning index.	 arr.unshift(0)
shift()	   :->    Removes first element in array.	arr.shift()
includes() :->    Checks if element exists	arr.includes(5)
indexOf()  :->     for Finds the index of element	arr.indexOf(3)
join()	   :->    Converts array to string	arr.join("-")


Method	          :->     ChangesOriginalArray	     Returns	                  Includes/ExcludesEndIndex?
slice(start, end) :->        ❌ No	           Extracted part of the array	      ❌ Excludes the end index
splice(strt, deltCount):->   ✅ Yes	             Removed elements	           Works with start & count, not index
            


*/


// ✅ Creating Arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Shaktiman", "Naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log("Element at index 1:", myArr[1]); // Accessing an array element


//***************************************✅ Array Methods *************************************************** */


// Adding elements to the end
myArr.push(6);
myArr.push(7);
console.log("After push:", myArr);

// Removing the last element
myArr.pop();
console.log("After pop:", myArr);

// Adding element at the beginning
myArr.unshift(9);
console.log("After unshift:", myArr);

// Removing the first element
myArr.shift();
console.log("After shift:", myArr);

// Checking if an element exists
console.log("Includes 9:", myArr.includes(9));

// Finding the index of an element
console.log("Index of 3:", myArr.indexOf(3));

// Joining array into a string
const newArr = myArr.join();
console.log(" myArr:", myArr);
console.log("Joined Array:", newArr);





//****************************************✅ Slice & Splice**************************************************** */


console.log("A (Original Array):", myArr);

// Slice: Returns a portion of the array without modifying the original
// const myn1 = myArr.slice(1, 3);
// console.log("After Slice (1,3):", myn1);
// console.log("B (After Slice, Original remains same):", myArr);

// Splice: Removes elements from the original array and returns them
const myn2 = myArr.splice(1, 3);
console.log("C (After Splice (1, 3), Original modified):", myArr);
console.log("Removed elements (Splice Result):", myn2);
