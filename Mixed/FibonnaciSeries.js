//Problem: Fibonacci Series
// Input: n = 7 → 0 1 1 2 3 5 8.
// 👉 Edge cases: n = 0 → nothing, n = 1 → 0 only.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0]
    }

    const series = [0, 1]; 

    for (let i = 2; i < n; i++) {
        const nextNum = series[i - 1] + series[i - 2]
        series.push(nextNum); 
    }
    return series; 
}

const res = fibonacci(7)
console.log(...res); 