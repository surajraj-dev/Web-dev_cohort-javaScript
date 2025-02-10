
/*
       Remember points: 
            for	        :->  Jab exact baar loop chalana ho
            for...of	:->  Jab array ke elements ko access karna ho
            for...in	:->  Jab object ke properties ko access karna ho
            break	Jab :->  loop ko poori tarah rokna ho
            continue	:->  Jab ek iteration skip karni ho
 */

//  1. Basic Understanding of for Loop

      for (let i = 1; i <= 5; i++) {
            // console.log("Number:", i);
        }
  
  
 // 2. Looping Through an Array

        const fruits = ["Apple", "Banana", "Mango", "Orange"];

        for (let i = 0; i < fruits.length; i++) {
            // console.log(fruits[i]);
        }


        // 3. Using for...of for Simplicity
        const cars = ["Tesla", "BMW", "Audi"];
         
        for(let car of cars){
            // console.log(car);
        }

// 4. Using for...in for Objects
        const student = {
            name: "Suraj Raj",
            age: 21,
            course: "JavaScript"
          };

          for (let key in student) {
            // console.log(key + ": " + student[key]);
          }

// 5. Nested for Loops
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 10; j++) {
            // console.log(`${i} x ${j} = ${i * j}`);
            }
            // console.log("------------");
        }
/* 
        6. Breaking & Continuing in a for Loop
        break: Stops the loop immediately.
        continue: Skips the current iteration and moves to the next.
        Example: Stop when the number is 3
*/
        console.log(`loop with break statement`)
        for (let i = 1; i <= 5; i++) {
            if (i === 3) {
            break;
            }
            console.log(i);
        }

        console.log(`loop with conti statement`)
        for (let i = 1; i <= 5; i++) {
            if (i === 3) {
              continue;
            }
            console.log(i);
          }
          







/*



                        Practice Questions
                Try solving these:

                Print all even numbers from 1 to 20 using a for loop.
                Create an array of student names and print them using a loop.
                Write a loop that calculates the sum of numbers from 1 to 100.
                Create an object with details of a mobile phone and print its details using for...in.

*/



