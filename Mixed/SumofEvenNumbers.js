//Problem: Sum of Even Numbers up to N
// Example: n = 10 → output: 30 (2+4+6+8+10)
// 👉 Edge Cases:
// n = 0 → sum = 0
// n = 1 → sum = 0

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity


//Way 1: Very hard and different way of solving it. 
function sumOfEvenNum(n) {
    let sum = 0; 
    //correct: checking edge case 
    if (n === 1 || n === 0) {
        return sum=0;     
    }   
    while (n) {
         if (n % 2 === 0) {
         sum += n; 
        }
        n--
    }
    console.log(sum); 
}
sumOfEvenNum(10);
//Time Complexity, o(n) -> linear.

//Step 2: Most Efficient way
function sumOfEvenNum2(n){
    let sum = 0; 
    for (let i = 1; i <= n ; i++) {
        if (i % 2 === 0) {
            sum += i; 
        }
    }
    return sum; 
}
const res = sumOfEvenNum2(10); 
console.log(res); 
//Time Complexity = o(n) -> Linear time complexity, as input grows output also grows. 

