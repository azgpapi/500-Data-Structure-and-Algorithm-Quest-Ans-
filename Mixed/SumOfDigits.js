//Problem: Sum of Digits

// Write a function that takes a number and returns the sum of its digits.
// Example: 123 → 1+2+3 = 6.
// 👉 Edge cases: 0 → 0, negative numbers → handle as positive.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function sumOfDigit(n){
    if (n === 0) {
        return 0; 
    }
    //Use Math.abs(n) => To handle negative numbers. 
    let sum = 0; 
    while (n > 0) {
        let lastDigit = n % 10; //extract last digit
        sum += lastDigit; // exactly adds to sum
        n = Math.floor(n/10); //exactly only stores 55 
    }
    console.log(sum)
    
}
sumOfDigit(5553333333333); 
//Time Complexity: o(log n) => Linear Time Complexity