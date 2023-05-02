// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
myString2=myString.charAt(0);
myString3=myString.slice(1,9);

// myString2=myString2.toUpperCase;

myString2=myString2.replace('d','D');
let myNewString =`${myString2}${myString3} `;

console.log(myNewString); // 'Developer'