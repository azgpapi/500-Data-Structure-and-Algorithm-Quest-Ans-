//Problem: Print All Odd Numbers Between 1 and N

// Input: n = 10 → 1 3 5 7 9

// 👉 Edge Cases:
// n = 1 → prints 1
// n = 0 → nothing

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function printOdd(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(`Odd Numbers: ${i}`)
        }
    }
}
printOdd(111898989);
//Time Complexity: 0(n) Linear. 