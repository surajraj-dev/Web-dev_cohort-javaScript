
/*
  1. Understanding Proxies in JavaScript
  A Proxy in JavaScript allows us to intercept and redefine fundamental operations
   (like getting or setting properties) on an object.

   PURPOSE ->A Proxy in JavaScript allows us to define custom behavior for fundamental 
   operations on an object (or array), such as property access (get), assignment (set), 
   and function invocation. In this case, the proxy is used to enable 
   negative indexing for arrays, which is not supported by default in JavaScript.

    Key Components of a Proxy:
    target → The original object (or array) being proxied.
    handler → An object containing traps (methods) to control interactions with the target.
    traps → Functions inside the handler that intercept operations like get, set, etc.


 */
const user = {
    name: "hitesh",
    age: 40,
    password: "123",
};

const proxyUser = new Proxy(user, {
    get(target, prop) {
        console.log(prop); // Logs the accessed property
        if (prop === "password") {
            throw new Error("Access Denied"); // Restrict access to password
        }
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Setting value ${value} to ${prop}`);
        target[prop] = value; // Allows setting values normally
        return true;
    },
});

   console.log(proxyUser.name); // "hitesh"
  console.log(proxyUser.password); // Error: Access Denied

/*    🔹 Explanation:
          ->  Accessing any property works as usual.
          -> Accessing "password" throws an error (Access Denied).
          ->  The set trap can be used to control how properties are modified.
 */

/************************************************************************************************************* */

/*
  2. Handling Negative Indexes in Arrays using Proxy
  -> JavaScript does not support negative indexing (like Python does).

    arr[-1] is undefined in JavaScript.
    We can use a Proxy to enable negative indexing.
 
*/

function negativeIndex(arr) {
    return new Proxy(arr, {
      get(target, prop) {
        const index = Number(prop);
        if (index < 0) {
          return target[target.length + index]; // Convert negative index to positive
        }
        return target[index];
      },
      set(target, prop, value) {
        const index = Number(prop);
        if (index < 0) {
          target[target.length + index] = value;
        } else {
          target[index] = value;
        }
        return true;
      },
    });
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  let newArr = negativeIndex(arr);
  
  console.log(arr[-1]); // undefined (normal JS behavior)

  console.log(newArr[-1]); // 10 (Proxy enables negative indexing)
  newArr[-1] = 22; // Setting new value at negative index
  console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 22]

  console.log(arr); // Original array is modified (as expected)
  
/*  Explanation:
        newArr[-1] returns the last element (like arr[arr.length - 1]).
        Setting newArr[-1] = 22 modifies the last element in the array.
        The proxy maps negative indexes to valid array positions. */


  /*************************** EXTRA KNOWLNOWLWDGE FOR INTERVIEW ************************************************** */
  /*
   PURPOSE ->A Proxy in JavaScript allows us to define custom behavior for fundamental 
   operations on an object (or array), such as property access (get), assignment (set), 
   and function invocation. In this case, the proxy is used to enable 
   negative indexing for arrays, which is not supported by default in JavaScript.
  
   Does this Proxy create a deep copy of the array?
Answer: No, the Proxy wraps the original array without cloning it. Any modification to newArr will also affect arr.

Example:
newArr[-1] = 42;
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 42] (modified original)
  
  */