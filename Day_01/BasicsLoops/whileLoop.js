
/*
     🌀 while Loop in JavaScript ()
        :->   while loop tab tak chalta hai jab tak condition true hoti hai.
        :->   Agar condition false ho jaye, toh loop ruk jata hai.

*/

    //  1️⃣ Basic Example: from 1 to 5 print a number
        // let i = 1;

        //     while (i <= 5) {  
        //     console.log(i);  // Number print karega
        //      i++;  // i ko 1 se badhata rahega
        //     }


//  *************************************************************************
               //   2️⃣while Loop with Array Traversal

        const fruits = ["Apple", "Banana", "Mango", "Orange"];
        let index = 0;

        while (index < fruits.length) {
          console.log(fruits[index]);  // Array ka har item print karega
        index++;
        }

//***************************************************************************************************** 

/*
      🔥 while Loop Practice Questions (JavaScript) 🔥
                    Basic Questions:
                    1️⃣ 1 se 100 tak ke EVEN numbers print karo.
                    2️⃣ 1 se 100 tak ke ODD numbers print karo.
                    3️⃣ Kisi bhi number ka factorial (n!) nikalna.
                    4️⃣ User se tab tak input lo jab tak wo "exit" na likhe.
                    5️⃣ Ek number ke sabhi digits ka sum nikalna (e.g., 1234 → 1+2+3+4 = 10).
                    6️⃣ Ek number ko reverse karo (e.g., 1234 → 4321).
                    7️⃣ Kisi bhi number ke digits count karo (e.g., 98765 → 5 digits).
                    8️⃣ Ek number ka multiplication table print karo (e.g., 7 x 1 = 7, ..., 7 x 10 = 70).
                    9️⃣ Fibonacci series print karo (0, 1, 1, 2, 3, 5, 8...).
                    🔟 Ek number ka sabse bada digit find karo (e.g., 7391 → 9).
*/