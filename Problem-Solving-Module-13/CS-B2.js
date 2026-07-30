/* ExpenseMate, a budgeting app, shows a running total next to each expense. Write a function runningTotal(amounts) that returns a new array where each element is the cumulative sum up to that point. 
● Return "Invalid" 
○ if input isn't an array 
○ any value isn't a number 
Expected Output: 
runningTotal([100, 50, 25]) → [100, 150, 175] 
Hints: 
1. Keep a variable that tracks the running sum so far 
2. For each amount, add it to the running sum and push the new sum into a result array 
 */