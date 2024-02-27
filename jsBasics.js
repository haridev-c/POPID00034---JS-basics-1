//variable declaration

const a = 10;
let b = 15;
var sum = 0;

//addition operations

sum = a + b;

//printing to console

console.log(sum);

//declaring an array

const arr = [1,2,3,4,5,6,7,8,9];

//looping through the array
const len = arr.length;
sum = 0;
for(let i = 0; i<len; i++){
    sum = sum + arr[i];
}

//printing sum of array elements
console.log(sum);