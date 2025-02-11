

// 1️⃣ Function using Rest Parameters (Collects multiple arguments into an array)

/*
    suppose agar ham argument me multiple argument pass kete haii but function parameter me hamne sirf 2 
    parameterliye haii to us case me rest operator ka use krte haii

 */
function calculateCartPrice(val1, val2, ...num1) {
    return num1;  // Returns an array of remaining values after val1 & val2
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000] (Remaining values after first two)

// -------------------------------------------

// 2️⃣ Function that accepts an Object as an argument
const user = {
    username: "Suraj",
    prices: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
// Output: Username is hitesh and price is undefined (because property name should be 'price', not 'prices')

handleObject({ username: "sam", price: 399 });
// Output: Username is sam and price is 399

// -------------------------------------------

// 3️⃣ Function that accepts an Array as an argument
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];  // Returns the second element from the array
}

console.log(returnSecondValue(myNewArray));
// Output: 400

console.log(returnSecondValue([200, 400, 500, 1000]));
// Output: 400 (Second element from this array)


/* 
  🔥Key concept:
                1️⃣ Rest Parameters (...num1) → Jab hume unknown number of values accept karni ho.
                2️⃣ Objects as Arguments → Jab object ke andar ke values function me chahiye ho.
                3️⃣ Arrays as Arguments → Jab array ka specific element extract karna ho.

 */