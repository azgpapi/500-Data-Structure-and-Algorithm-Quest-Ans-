//Problem: Print a Number Pyramid

// Input: n = 5
// Output:

// 1
// 12
// 123
// 1234
// 12345

//Methods I will use: 
// 1. What is input/output? 
// 2. What are edge cases? 
// 3. Can I solve it manually/paper? 
// 4. Can I break it into steps? 
// 5. What tools/structure must I use? 
// 6. What is it's time and space complexity

function printNumberPyramid(n) {
  // The outer loop handles the number of rows.
  for (let i = 1; i <= n; i++) {
    let row = '';
    // The inner loop builds the string for each row, adding numbers sequentially.
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    // Print the completed row on a new line.
    console.log(row);
  }

  for (let i = n; i > 0; i--) {
    let row = ''
    for (let j = 1; j < i; j++) {
        row += j; 
    }
    console.log(row)
  }
}

printNumberPyramid(5);
//Time Complexity:  O(n²)