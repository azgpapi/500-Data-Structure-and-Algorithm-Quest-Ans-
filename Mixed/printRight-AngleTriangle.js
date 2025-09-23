//Problem: Print a Right-Angle Triangle Pattern 

// Input: n = 5
// Output:

// *
// **
// ***
// ****
// *****

//and

//***** 
//****
//***
//**
//*

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function print(n){
    for (let i = 1; i <= n; i++) {
    let row = ''; 
        for (let j = 1; j <= i; j++) {
            row += '*'; 
        } 
        console.log(row); 
    }
}
print(5); 
//Time complexity: o(n->squared), it is nested loop. 

function print2(n){
    for (let i = n; i >= 1; i--) {
        let row = ''; 
        for (let j = 1; j <= i ; j++) {
            row += '*' 
        }
        console.log(row);
    }
}
print2(5);
//Time complexity: o(n->squared), it is nested loop. 
