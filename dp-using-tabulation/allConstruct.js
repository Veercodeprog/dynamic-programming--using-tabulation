// write a function allConstruct that accepts strign and array of SVGStringList.apply
// the function shoulf return a 2d array conatining all of the ways that the target can be constructing by concatenating elements of wordwbank array

// time: O(n^m)
//space:O(m)
const allConstruct = (target, wordbBank) => {

    if (target === '') {
        return [
            []
        ];
    }
    const result = [];
    for (let word of wordbBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordbBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            // console.log(numWays);
            result.push(...targetWays);

        }
    }

    return result;
}

const word = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g']
const w = ['purp', 'p', 'ur', 'le', 'purpl']
console.log(allConstruct('purple', w))
console.log(allConstruct('abcdef', word))


const allConstructMemo = (target, wordbBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') {
        return [
            []
        ];
    }
    const result = [];
    for (let word of wordbBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstructMemo(suffix, wordbBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            // console.log(numWays);
            result.push(...targetWays);

        }
    }
    memo[target] = result;
    return result;
}

const w1 = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g']
const w2 = ['purp', 'p', 'ur', 'le', 'purpl']
console.log(allConstructMemo('purple', w2))
console.log(allConstructMemo('abcdef', w1))


//time: O(n^m)
//space: O(n^m)

const allConstructTab = (target, wordbBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [
        []
    ];
    let count = 0;
    for (let i = 0; i <= target.length; i++) {

        for (let word of wordbBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }

        }

    }

    return table[target.length];
}

const w4 = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g', 'efg']
console.log(allConstructTab('abcdefg', w4))