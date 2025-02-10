
/* 
                1️⃣ if...else Statement
                ✅ The else block executes if the if condition is false.

*/
let number = 10;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}
// Output: "Even Number"

// ****************************************************************************************************

/* 
                        2️⃣  if...else if...else Statement
                        ✅ When there are multiple conditions, use else if to check additional cases.
*/

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
// Output: "Grade: B"

// *****************************************************************************************************
/*   
                        3️⃣ Ternary Operator (? :)
                            ✅ A shorter way of writing an if...else statement.
                            ✅ It returns a value based on a condition.

*/

let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);
// Output: "Adult"



//*************************************************************************************************** 
/* 
                 1️⃣switch Statement
                        ✅ The switch statement is used when there are multiple conditions based on a single value.
                        ✅ It is faster than multiple if...else if statements in some cases.
*/
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Sunday":
        console.log("Relax, it's weekend!");
        break;
    default:
        console.log("It's a normal day.");
}
// Output: "Start of the week!"
/* 
      Important Notes on switch:
             Use break; to stop execution after a case match.
             If break; is missing, all cases below the matching case will also execute (fall-through behavior).               
*/