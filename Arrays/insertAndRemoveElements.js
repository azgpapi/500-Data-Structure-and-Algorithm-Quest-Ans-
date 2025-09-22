//Problem: Insert and Remove Elements 

// Implement a function modifyArray that takes an array and two additional arguments:

// index – the position where a new element should be added.
// value – the value to insert at the given index

// This function should add the element at the specified index and return the modified array. If index is out of range, add value at the end.
// Example: modifyArray([10, 20, 30], 1, 15) should return [10, 15, 20, 30].

//Solution 1: 
function modifyArray(arr, index, value){
    //consider always edge cases. 
    if (arr.length === 0) {
        return [] + ' Nothing to add, empty array ' 
    }
    if(index > arr.length || index < 0){
        throw new Error("Invalid Index Inserted");
    }

    arr.splice(index, 0, value);
    console.log(arr);
    return arr; 
}
//modifyArray([1,2,3,4,5], 2, 33); 
//This have time complexity of o(1)

//Solution 2: 
function modifyArray2(arr, index, value){
    if (index < 0 || index > arr.length ){
        throw new Error("Invalid Index Input");
    }
 
    arr[index] = value; 
    console.log(arr);
    return arr; 
}
modifyArray2([1,2,4,5], 1, 32); 