//Problem: Check Armstrong Number 
// (Armstrong = sum of digits³ equals the number itself).
// Example: 153 → 1³+5³+3³ = 153 → true.
// 👉 Edge cases: single-digit numbers → always Armstrong.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function armStrong(n){ 
    if (n === 0) {
        return 0; 
    }
    let num = Math.abs(n);  
    let result = 0; 

    while (num > 0) {
        let lastNum = num % 10; //got the last digit 
        lastNum *= lastNum * lastNum; //got the cube of last digit 
        result += lastNum; 
        num = Math.floor(num/10)
    }
    if (result === n) {
        return true; 
    }else {
        return false;
    }
}
const res = armStrong(153); 
console.log(res); 
//Time Complexity: O(log n)