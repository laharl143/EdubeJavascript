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