/*  Singleton object  
               :-> Ek aisa object jo sirf ek baar create hota hai aur baar-baar reuse hota hai.
                   Memory efficient hota hai kyunki same instance baar-baar use hoti hai.
                   Mostly configuration settings, database connections ya global state management ke liye use hota hai.

                   bad me indepth padhna haii
*/
 

// Symbol for unique key
const mySym = Symbol("uniqueKey");


// Object Literal
const JsUser = {
    name: "Suraj",
    "full name": "Suraj Raj",
    [mySym]: "secretValue",
    age: 18,
    location: "Jaipur",
    email: "suraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// // Accessing properties
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "suraj@chatgpt.com"
// Object.freeze(JsUser) //if we use email will not change
JsUser.email = "suraj@microsoft.com"
 console.log(JsUser);



// Adding methods
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//calling method
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/*
  🔹Dot Notation (obj.prop) → Use when the property name has no spaces or special characters.
  🔹Bracket Notation (obj["prop"]) → Use when the property name has spaces, special characters, or is dynamic.
  🔹Symbol as Key ([mySym]: "value") → Use for hidden & unique properties.
🔹 Object.freeze(obj) makes an object immutable, meaning you cannot add, delete, or modify
  ✔ Dot notation is simpler & fast, bracket notation is flexible, and Symbols ensure uniqueness. 🚀

*/