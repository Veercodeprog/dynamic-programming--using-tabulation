// write a function howSum(target,numbers) that takes in a targetSum and an Array of numbers.

// the function should return shortest array containing any combination of Elements that add up to exactly the targetsum.if there no combination then returns null.if there are multiple combinations ,you may return any onemptied.
//    m= targetsum, n=length of array     
//time: O(n^m *m)    worst case the array be filled with 1's
// space :O(m^2 )

const bestSum = (targetSum, numbers) => {

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortestCombination = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);

        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || shortestCombination.length > combination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

let nums = [2, 9, 10, 12, 5, 3, 7, 9, 17, 2];
console.log(bestSum(8, nums))
let n = [5, 3, 4, 7]
console.log(bestSum(7, n))



// // time: O(m*n*m) 
// space: O(m^2 ) 
const bestSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortestCombination = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemo(remainder, numbers, memo);

        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || shortestCombination.length > combination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination
    return shortestCombination;
}

let num = [3, 3, 5, 2, 4, 8];
let now = [1, 2, 5, 10, 25, 50]
console.log(bestSumMemo(100, now))

// time :O(m^2 *n)
// spcae :O(m^2)

const bestSumTab = (targetSum, numbers) => {
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];


                // table[i + num] = combination;
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }


        }

    }
    return table[targetSum];
}

let n2 = [2, 5, 3, 4, 7]
console.log(bestSumTab(8, n2))