//Problem: Print Numbers 1 to N 

// Write a function that takes an integer n and prints numbers from 1 to n.
// 👉 Edge Cases:
// n = 0 → should print nothing
// n = 1 → prints just 1

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function printNum(n){
    if (n === 0) {
        return null; 
    } 

    for (let i = 1; i <= n; i++) {
        console.log(i); 
    }
}

printNum(10); 
//Time Complexity: 0(n), as input grows, output also grows. It is linear. 
