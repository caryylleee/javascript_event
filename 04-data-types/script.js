let isLoading = '10';

console.log(typeof isLoading);
let sym = Symbol("a");
console.log(sym);

console.log(typeof sym);

let person = {
    firstName:'John',
  age:15
}

console.log(person);
let newArr=[4,5,6]
// let numArr=numArr;

let numArr=[...newArr];
// let numArr=[...numArr];

numArr.push(10);
console.log(numArr)
console.log(newArr)