//Problem: Sum of Array Elements 

// Write a function sumArray that takes an array of numbers and returns the sum of all elements.
// Example: sumArray([5, 10, 15]) should return 30

//Step 1: Hard way
function sumArray(arr){
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}
const result = sumArray([1,2,3,4,5])
console.log(result); 
//Time Complexity = o(1) 


//Step 2: Reduce 
function sumArray2(arr){
    return arr.reduce((a, c) => a + c, 0); 
}
const res = sumArray2([1,2,3,4,5])
console.log(res); 