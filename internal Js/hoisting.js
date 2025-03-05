
console.log(a);  //  Undefined (var is hoisted but not assigned)
var a = 10;

console.log(b);  //  ReferenceError (b is in TDZ)
let b = 20;

greet();  //  "Hello!" (Function declaration is fully hoisted)
function greet() {
    console.log("Hello!");
}

sayHi();  // TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hi!");
};


/*

📌  Hoisting in JavaScript 
    Hoisting is JavaScript’s behavior of "appear" variable and function declarations to the top 
    of their scope before execution. 

    This happens inside the Global Execution Context (GEC) during the Memory Creation Phase.

    🔹 How TDZ Works Internally?
        1️⃣ Memory Creation Phase (Hoisting Phase)

        let and const variables are hoisted but NOT initialized.
        They stay in the Temporal Dead Zone (TDZ).
        2️⃣ Execution Phase

Accessing them before declaration throws a ReferenceError.
After declaration, they get initialized and can be used.
*/

/*
🚀 Deep Explanation (GEC + Hoisting)
    When JavaScript runs, it first creates the Global Execution Context (GEC), which has two phases:
    1️⃣ Memory Creation Phase (Hoisting Phase)
    The JavaScript engine scans the code before execution.
    Variable and function declarations are stored in memory.
    var variables are hoisted with undefined, while let and const are kept in the Temporal Dead Zone (TDZ).
    Function declarations are fully hoisted, meaning they can be called before their definition.
    
    2️⃣ Execution Phase (Code Execution)
    The JavaScript engine executes the code line by line in the Call Stack.
    Variables get assigned actual values when their line executes.
    Function calls execute when encountered.
 */