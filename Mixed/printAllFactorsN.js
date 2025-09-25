//Problem: Print all Factors of N 
// Input: 12 → 1, 2, 3, 4, 6, 12.
// 👉 Edge case: n = 1 → 1 only.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function printFactorsN(n){
    let res = []; 
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res.push(i); 
        }           
    }
    return res; 
}
const res = printFactorsN(12); 
console.log(res); 
//Time Complexity:o(n)