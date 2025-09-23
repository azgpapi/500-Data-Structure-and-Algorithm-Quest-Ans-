//Problem: Multiplication Table of Number 

// Input: n = 5
// Output:

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// 👉 Edge Cases:
// n = 0 → table should be all zeros


//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function multipliTable(n) {
    let sum = 0; 
    for (let i = 1; i <= 10; i++) {
        sum = n * i; 
        console.log(`${n} x ${i} = ${sum}`); 
    }
}
multipliTable(10);

//Time complexity of the given code, o(1) = Constant. 