//Problem: Count Even and Odd Digits in a Number
// Input: 123456 → even digits = 3, odd digits = 3.
// 👉 Edge case: 0 → even count = 1.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function countEvenOdd(n) {
    let even = 0; 
    let odd = 0; 

    if (n === 0) {
        return "Count: " + 1; 
    }

    let newN = Math.abs(n); //To handle negative number

    while (newN > 0) { 
        let extract = newN % 10; //This will extract the last digit
        if (extract % 2 === 0) {
            even++; 
        }else {
            odd++; 
        }
        newN = Math.floor(newN/10); 
    }
    return {
        Odd: odd,
        Even: even 
    }
}
const res = countEvenOdd(12345); 
console.log(res); 
//Time Complexity: O(log n)