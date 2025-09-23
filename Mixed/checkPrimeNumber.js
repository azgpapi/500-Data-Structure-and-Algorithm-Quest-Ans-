// Problem: Check Prime Number 
// Input: n = 7 → true
// Input: n = 8 → false

// 👉 Edge Cases:
// n = 0 or 1 → false
// n = 2 → true

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function checkPrime(n) {
    if ( n === 2) {
        console.log(`True` )
    } else if(n % 2 === 0 || n % 3 === 0) {
        console.log(`False`)
    } else {
        console.log(`True`)
    }
}
checkPrime(198)


//Time Complexity: o(1) -> constant 