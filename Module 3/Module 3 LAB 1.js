// Scenario
// Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:

// the first determines whether the drawn numbers may be repeated;
// the second one states if the returned array of numbers should be sorted.
// Use the Set class.



function getRandomSet(m, n, allowRepeat, sort) {
    let set = new Set();
    while (set.size < m) {
        let num = Math.floor(Math.random() * (n + 1));
        if (allowRepeat) {
            set.add(num);
        } else {
            if (!set.has(num)) {
                set.add(num);
            }
        }
    }
    let result = [...set];
    if (sort) {
        result.sort((a, b) => a - b);
    }
    return result;
}

// Test Script:
console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));

//Explanation:

// The function takes 4 parameters as input: m, n, allowRepeat, sort
// A new Set is created and it's size is checked with while loop.
// Inside the while loop, a random number is generated between 0 and n (inclusive) using Math.random() and Math.floor().
// If allowRepeat is true, the random number is added to the set.
// If allowRepeat is false, it's checked if the set already contains the random number. If not, then it's added to the set.
// After the while loop, the set is converted to an array using [...set].
// If sort is true, the result array is sorted in ascending order using .sort() method.
// Finally, the result array is returned.