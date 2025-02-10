/*  
      variables:- A variable is a container that is  used to store data in JavaScript.
    
        In JavaScript, variables can be declared in **four ways**:

        1️⃣ Using `var`
        2️⃣ Using `const`
        3️⃣ Using `let`
        4️⃣ Automatically (Without `var`, `let`, or `const`)
        

*/

var userName = "Suraj";
// console.log(userName); // Output: Suraj

var userName = "Raj";  // ✅ Re-declaration allowed
// console.log(userName); // Output: Raj



let age = 25;
console.log(age); // Output: 25

age = 30;  // ✅ Update allowed
// console.log(age); // Output: 30

//  let age = 35; //❌ Re-declaration not allowed (Error)




const PI = 3.1416;
// console.log(PI); // Output: 3.1416

// PI = 3.5; ❌ Error: Assignment to constant variable
// const PI = 3.5; ❌ Error: Re-declaration not allowed





name = "Suraj Raj";
// console.log(name); // Output: Suraj

console.table([userName,age,PI,name]);


/*
                          Best Practices:
                          ✅ Use `let`** for values that will change.
                          ✅ Use `const`** for values that should **never change**.
                          ❌Avoid `var`** as it can create unexpected issues.
                          ❌ **Never use automatic variable declaration** as it makes debugging difficult.

*/
