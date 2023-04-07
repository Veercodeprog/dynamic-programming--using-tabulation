// number of ways target can be created from given array of string elements

// m = target.length
// n = wordbank.length
// 
// same as can construct time and space
// time: Object(n ^ m * m ) as n branching to m levels in tree .so n^m and multiply by m as we are slicing the target on matching prefxes
// space: O(m^2) i.e. heoght of tree ie.e maximum no. of stack frames we need on call stacks before we bought them out on base case multiply by m as we are slicing a target and worst case we have to slice it  m times.

const countConstruct = (target, wordbBank) => {

    if (target === '') {
        return 1;
    }
    let totalCount = null;
    for (let word of wordbBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWays = countConstruct(suffix, wordbBank);
            // console.log(numWays);
            totalCount += numWays;



        }
    }

    return totalCount;
}
const word = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g']
const w = ['purp', 'p', 'ur', 'le', 'purpl']
console.log(countConstruct('purple', w))
console.log(countConstruct('abcdef', word))

// same as canConstruct
// time: O(n * m^2)
// space: O(m^2)

var c = 0;
const countConstructMemo = (target, wordbBank, memo = {}) => {

    if (target in memo) return memo[target];

    if (target === '') {
        return 1;
    }
    let totalCount = null;
    for (let word of wordbBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWays = countConstructMemo(suffix, wordbBank, memo);
            // console.log(numWays);
            totalCount += numWays;



        }
    }
    memo[target] = totalCount;

    return totalCount;
}
const w1 = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g']
const w2 = ['purp', 'p', 'ur', 'le', 'purpl']
console.log(countConstructMemo('purple', w2))
    // console.log(countConstructMemo('abcdef', w1))


// time: O(m^2*n)
//space: O(m)
const countConstructTab = (target, wordbBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    let count = 0;
    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordbBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                    if ((i + word.length) === target.length) {
                        count++;
                    }
                }

            }
        }
    }

    return count;
}

const w4 = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g', 'efg']
console.log(countConstructTab('abcdefg', w4))
const w5 = ['df', 'ab', 'def', 'cde', 'c', 'fg', 'g']
console.log(countConstructTab('abcdefg', w5))


// time: O(m^2*n)
//space: O(m)
const countConstructTabAlternate = (target, wordbBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {

        for (let word of wordbBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }

    }

    return table[target.length]
}

const w6 = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g', 'efg']
console.log(countConstructTabAlternate('abcdefg', w6))
const w7 = ['df', 'ab', 'def', 'cde', 'c', 'fg', 'g']
console.log(countConstructTabAlternate('abcdefg', w7))