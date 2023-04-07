// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum. 

// lets m = target sum and n = array lenght then time complexity is O(n ^ m) and space is O(m)
let numberCal = 0;
let memoCal = 0;
const canSum = (targetSum, numbers) => {

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num;
        // numberCal++;
        // console.log(remainder)
        // as we can reuse th numbers of arrays as many times we like

        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }
    return false;

};
let nums = [5, 4, 5, 6, 7, 9, 17, 2];

canSum(8, nums)
console.log(canSum(8, nums), numberCal)

let numberSums = 0;

// lets m = target sum and n = array lenght then time complexity is O(n ^ m) and space is O(m) for memoized canSum

const canSumMemo = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num;
        memoCal++;
        // as we can reuse th numbers of arrays as many times we like
        if (canSumMemo(remainder, numbers, memo) === true) {

            memo[targetSum] = true;

            return true;
        }
    }
    memo[targetSum] = false;
    return false;

};
let num = [5, 4, 5, 6, 7, 9, 17, 2];
console.log(canSumMemo(8, nums), memoCal)

// time:O(m*n) m= targetssum, n= nums.length
// space: O(m)
const canSumTab = (targetSum, numbers) => {
    const table = new Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }

        }

    }
    return table[targetSum];

}

let n1 = [5, 4, 5, 6, 7, 9, 17, 2];
console.log(canSumTab(8, n1))