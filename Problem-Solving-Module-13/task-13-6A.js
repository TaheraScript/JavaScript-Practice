/* Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.
Input
Output
[10, 5, 8, 20, 15]
8


Starter Snippet:
// Input: an array of numbers
// Output: the second smallest number
// Returns: a number */
 
function findSecondSmallest(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        // If we found a new smallest number
        if (currentNumber < smallest) {
            secondSmallest = smallest;
            smallest = currentNumber;
        }

        // If currentNumber is between smallest and secondSmallest
        else if (
            currentNumber > smallest &&
            currentNumber < secondSmallest
        ) {
            secondSmallest = currentNumber;
        }
    }

    return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8


