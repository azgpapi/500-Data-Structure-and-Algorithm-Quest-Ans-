//Problem: Reverse Digits of Number 

// Input: 1234 → 4321
// 👉 Edge Cases:
// n = 0 → 0
// Single digit → itself

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function reverseDigit(n) {
    if (n === 0) {
        return 0; 
    }

    //Handle negative number 
    let reversedNumber = 0; 
    let currentNumber = n; 

    while (currentNumber > 0) {
        const latdigit = currentNumber % 10;
        reversedNumber = (reversedNumber * 10) + latdigit
        currentNumber = Math.floor(currentNumber/10) 
    }
    return reversedNumber; 
}