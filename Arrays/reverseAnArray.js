//Problem: Reverse an Array 

// Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function reverseArray(arr){    
    let newArr = []; 
    //Check edge cases, if array is empty or not. 
    if(arr.length === 0){
        return []; 
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr)
    return newArr; 
}
reverseArray([1, 2, 3, 4, 5]); 

//o(1) time complexity 

function reverseArray2(arr){
    const newArry = [...arr].reverse(); 
    console.log(newArry)
    return newArry
}

reverseArray2([1,2,3,4,5])

//o(1) time complexity 


// Overall the problem has been solved in two ways, easy and hard! 