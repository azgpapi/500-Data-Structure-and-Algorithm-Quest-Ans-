// Problem: Create and Manipulate Arrays

// Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers.
// Example: createOddNumbersArray(5) should return [1, 3, 5, 7, 9].

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function createOddNumbersArray(n) {
    const arr = []; 
    for (let i=0; i <= n; i++){
        arr.push(2 * i+1); 
    }
    return arr; 
}

//Input = the input is any positive integer, Output = is array of OddNumbers. 
//Edge cases of the problem could be negative number, or extremly huge number(performance test)

//Can be solved on paper, by specifying step by step processes. A. Create a function B. Have a parameter of number C. create an empty array to store and return finally
//D. Loop through the input number until n-1 E. apply logic F. Return Array  

//Time Complexity o(n); 