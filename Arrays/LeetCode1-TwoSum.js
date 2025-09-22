//Problem: Two Sum 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


function twoSum(arr, target){
    if (arr.length === 0) {
        return []; 
    }
    let num = arr[arr.length - 1]; 
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i,j]; 
            }
        }
    }
}

const result = twoSum([1,2,3,4,5], 5);
console.log(result); 

//Time complexity => o(n-squared) n2