// write a function howSum(target,numbers) that takes in a targetSum and an Array of numbers.

// the function should return an array containing any combination of Elements that add up to exactly the targetsum.if there no combination then returns null.if there are multiple combinations ,you may return any onemptied.
//         
//time: O(n^m *m)    as return [...remainderResult, num];
// takes iterative steps to get remainder result and in worst case  [...remainderResult, num] this array can have m length i.e. equal to argument array
// space: O(m)

const howSum = (targetSum, numbers) => {

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers); /// when remainderResult returns 
        // console.log("steps")
        // console.log(targetSum)
        // console.log(num)
        // console.log(remainderResult)

        if (remainderResult !== null) {
            return [...remainderResult, num];
        }

    }
    return null;

}

let nums = [3, 9, 10, 12, 5, 7, 9, 17, 2];
console.log(howSum(8, nums))
let n = [5, 3, 4, 7]
console.log(howSum(7, n))



// // time: Object(n*m*m) extra m for iterative time for creating memo[targetSum]  
// space: O(m^2 ) as memo[targetSum] can take length m at worst case
const howSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSumMemo(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }

    }
    memo[targetSum] = null;
    return null;

}

let num = [3, 3];
console.log(howSumMemo(8, num))



// time :O(m^2n)
// spcae :O(m^2)

const howSumTab = (targetSum, numbers) => {
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num];
            }

        }

    }
    return table[targetSum];
}

let n2 = [2, 5, 3, 4, 7]
console.log(howSumTab(8, n2))



//this solution is for finding subarray using neighboring elements only

const subarraySum = (targetSum, numbers) => {
    let start = 0,
        end = 0;
    let sum = numbers[0];

    while (end < numbers.length) {
        if (sum === targetSum) {
            return numbers.slice(start, end + 1);
        } else if (sum < targetSum) {
            end++;
            sum += numbers[end];
        } else {
            sum -= numbers[start];
            start++;
        }
    }

    return null;
}

let n0 = [2, 5, 9, 3, 4, 7]
console.log(subarraySum(8, n0))

const twoElementsTab = (targetDiff, numbers) => {
    const table = new Array(targetDiff + 1).fill(-1);
    table[0] = 0;

    for (let num of numbers) {
        for (let j = targetDiff; j >= num; j--) {
            if (table[j - num] !== -1) {
                return [num, j - num];
            }
        }
        table[num] = 0;
    }
    return null;
}
let n123 = [2, 5, 11, 3, 4, 7]
console.log(twoElementsTab(8, n123))