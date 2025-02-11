// const tinderUser = new Object()

//create a empty object
const tinderUser = {}
//we haveto push the data

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "suraj@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suraj",
            lastname: "Raj"
        }
    }
}
// // access the value  in a nested object
//  console.log(regularUser.fullname.userfullname.firstname);
//  console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}  // Object1 created with key-value pairs
const obj2 = {3: "a", 4: "b"}  // Object2 created with key-value pairs
const obj4 = {5: "a", 6: "b"}  // Object4 created with key-value pairs

// ❌ Incorrect way to merge objects
const obj3 = { obj1, obj2 }  
// console.log(obj3);
/*This will not merge obj1 and obj2, instead it will create an object with obj1 and obj2 as nested objects
Output will be:
{
    obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"}
}
      This is not a true merge, it nests the objects instead.
*/


const obj5 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj5);
/*         { ...}    :->Spread operator is the preferred way to merge objects in modern JavaScript
                :->It gives the same output as Object.assign() but is more readable
                    { obj1, obj2 } :->❌ (Nests objects instead of merging)
                    Object.assign({}, obj1, obj2, obj4):-> ✅ (Merges objects correctly)
                    { ...obj1, ...obj2, ...obj4 } :->✅ (Best method using spread operator)

 */

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email); // Access the element in object of array


// ********************************************************************************************************************



console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Retrieving all keys of the object as an array
console.log(Object.keys(tinderUser)); //output :  [ 'id', 'name', 'isLoggedIn' ]

// Retrieving all values of the object as an array
console.log(Object.values(tinderUser)); // Output: [ '123abc', 'Sammy', false ]

// Retrieving key-value pairs as an array of arrays
console.log(Object.entries(tinderUser)); // Output: [ ['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false] ]

// Checking if the object has a specific property
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// Output: true  
//  hasOwnProperty this properties will check and return the boleean value😀😀😀😀


/*      
        Object.keys(object) → Returns an array of all keys in the object.
        Object.values(object) → Returns an array of all values in the object.
        Object.entries(object) → Returns an array of [key, value] pairs.
        hasOwnProperty('propertyName') → Checks if the object has a specific property (returns true or false). 
*/


//**************************************************************************************************************** */

// Creating an object 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Suraj"
};

// Accessing a property normally
//  console.log(course.courseInstructor);  // Output: "Suraj"

/*  ✅ Object Destructuring :-> 
             JavaScript me destructuring ka use object aur array ke properties/values ko
             directly extract karne ke liye hota hai. Yeh code ko short aur readable banata hai. 🚀
 */
const { courseInstructor: instructor } = course;

// 'courseInstructor' property is now assigned to a new variable 'instructor'
console.log(instructor);  
// Output: "Suraj"


// ❌ If you try to print 'courseInstructor' directly here, it will throw an error
//  console.log(courseInstructor);  // ❌ ERROR: courseInstructor is not defined

/*          -> Yaha courseInstructor ka naya naam instructor rakha gaya hai.
            -> Matlab courseInstructor naam ka koi variable exist nahi karta.
                because we have to declear this line
                 const { courseInstructor: instructor } = course; ❤️❤️
            -> Isliye agar hum direct courseInstructor ko print karenge, toh error aayega.
 */