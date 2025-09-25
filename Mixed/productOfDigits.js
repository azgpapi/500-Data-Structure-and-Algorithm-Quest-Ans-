//Problem: Product of Digit 
// Input: 234 → 2*3*4 = 24.
// 👉 Edge case: 0 → 0, single-digit → itself.

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function productOfDigit(n) {
    if (n === 0) {
        return 0; 
    }
    //Use Math.abs(n) => To handle negative nubmers. 
    let mul = 1; 
    while (n > 0) {
        let lastDigit = n % 10; 
        mul *= lastDigit; 
        n = Math.floor(n/10); 
    }
    return mul; 
}
const res = productOfDigit(555)
console.log(res); 

//Time complexity: o(log n)

