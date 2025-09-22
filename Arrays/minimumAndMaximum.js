//Problem: Minimum and Maximum 

// Implement a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.
// Example: findMinMax([3, 5, 7, 2, 8]) should return { min: 2, max: 8 }.

//Step 1: Easy way, using Math funtion. 
function findMinMax(arr){
    
    const max = Math.max(...arr) 
    const min =  Math.min(...arr); 

    return {
        max: max,
        min: min
    }

}

const result = findMinMax([1, 45, 32, 2, 34 , 4]); 
console.log(result);
//Time Complexity: 0(1) -> Linear 

//step2: use loop to keep track 
function findMinMax2(arr){
    if (arr.length === 0) {
        return null; 
    }
    if (arr.length === 1) {
        return arr; 
    }

    let max = 0; 
    let min = arr.length - 1; 
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > max) {
        max = arr[i]; 
       }
       if (arr[i] < min) {
        min = arr[i]; 
       }
    }
    return {
        max: max,
        min: min 
    }

}
const result2 = findMinMax2([1,2,3,0,4,5,6])
console.log(result2)
//Time Complexity: 0(1)