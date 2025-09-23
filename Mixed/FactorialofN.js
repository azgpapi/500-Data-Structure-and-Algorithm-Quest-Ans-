//Problem: Factorial of N 

// Example: n = 5 → 120

// 👉 Edge Cases:
// n = 0 → 1 (by definition)
// n = 1 → 1

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function factorial(n){
    if (n===0 || n===1) {
        return 1; 
    }
    let factorial = 1; 

    for (let i = 1; i <= n; i++) {
        factorial *= i; 
    }
    console.log(`Factorial number of ${n} is ${factorial}`);
}
factorial(3);