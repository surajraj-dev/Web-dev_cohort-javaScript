// Baic function creation

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

//  sayMyName;
// sayMyName()


// Function with Parameters
function addTwoNumbers(number1, number2) {
    console.log("Sum:", number1 + number2);
}
addTwoNumbers();         // Output: NaN (undefined + undefined)
addTwoNumbers(3, 4);     // Output: Sum: 7
addTwoNumbers(3, "4");   // Output: Sum: 34 (String Concatenation)
addTwoNumbers(3, "a");   // Output: Sum: 3a
addTwoNumbers(3, null);  // Output: Sum: 3 (null is treated as 0)


function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
console.log(addTwoNumbers()); // output: NaN because no argument pass


//  Function with Return Value
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result1 = addTwoNumbers(3, 5)
//  console.log("Result1: ", result1);




function loginUserMessage(username ="Raj"){    // undefine value se bachne ke liye default parameter kuch dena hoga
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// Function calls
console.log(loginUserMessage());         // Output: "Raj just logged in"
// console.log(loginUserMessage);           // Output: Function reference, not execution
console.log(loginUserMessage("Suraj"));  // Output: "Suraj just logged in"
