//Problem: Count digits of Number 
// Q5. Count Digits of a Number

// Input: n = 12345 → 5
// 👉 Edge Cases:
// n = 0 → 1 digit
// Negative numbers: -123 → 3 digits

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function countDigitofNumber(n) {
    if (n === 0) {
        return 1; 
    } 

    let num = Math.abs(n); 
    let count = 0; 

    while (num > 0) {
        count++
        num = Math.floor(num/10); 
    }
    return count; 
}
console.log(countDigitofNumber(1234));  