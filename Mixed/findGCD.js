//Problem: Find GCD (Greatest Common Divisor) of Two Numbers
// Example: (12, 18) → 6.
// 👉 Edge cases: (0, n) → n.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function factorize1(n){
    let fact = []; 
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            fact.push(i); 
        }
    }
    return fact; 
}
const f1 = factorize1(12);
console.log(f1);



function factorize2(m) {
    let fact2 = []; 
    for (let i = 0; i <= m; i++) {
        if (m % i === 0 ) {
            fact2.push(i); 
        }
    }
    return fact2; 
}
const f2 = factorize1(18);
console.log(f2);



function calculateGCD(a, b){
   while (b !== 0) {
        const temp = b
        b = a % b 
        a = temp; 
   }
   return a; 
}

const res = calculateGCD(12, 18); 
console.log(res); 