// Finding ugly numbers is a common problem that can be solved efficiently with dynamic programming. These are numbers that have prime factors consisting only of 2, 3, or 5. The number 1 is included as an ugly number by convention.


// The number sequence goes as 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …


// Given a number n, the task is to find the nth ugly number. There are several approaches to solving this problem. Let’s have a look at each of them.



// normal approach
const isUgly = (num) => {
    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else if (num % 3 === 0) {
            num /= 3;
        } else if (num % 5 === 0) {
            num /= 5;
        } else {
            return false;
        }
    }
    return true;

}

//recursion 
const isUglyRecursion = (num) => {
    if (num !== 1) {

        if (num % 2 === 0) {
            return isUglyRecursion(num / 2);
        } else if (num % 3 === 0) {
            return isUglyRecursion(num / 3);
        } else if (num % 5 === 0) {
            return isUglyRecursion(num / 5);
        } else {
            return false;
        }
    }

    return true;


}

const isUglyMemo = (num, memo = {}) => {
    if (num in memo) return memo[num];
    if (num === 1) return true;
    if (num !== 1) {

        if (num % 2 === 0) {
            return isUglyMemo(num / 2);
        } else if (num % 3 === 0) {
            return isUglyMemo(num / 3);
        } else if (num % 5 === 0) {
            return isUglyMemo(num / 5);
        } else {
            memo[num] = false;
            return false;
        }
    }
    memo[num] = true;
    return true;
}

const isUglyMemo2 = (() => {
    const cache = {};
    return function isUglyMe(num) {
        if (num <= 0) return false;
        if (num === 1) return true;
        if (num in cache) return cache[num];
        const result =
            num % 2 === 0 ?
            isUglyMe(num / 2) :
            num % 3 === 0 ?
            isUglyMe(num / 3) :
            num % 5 === 0 ?
            isUglyMe(num / 5) :
            false;
        cache[num] = result;
        return result;
    };
})()
const getNthUgly = (n) => {

    let i = 1;
    let count = 1;
    while (n > count) {

        i++;
        if (isUglyMemo(i)) {
            count++;
        }
    }
    return i;
}

console.log(getNthUgly(10))

const nthUglyTab = (num) => {
    const table = new Array(num + 1).fill(0);
    table[1] = 1;
    let x = 1,
        y = 1,
        z = 1;
    for (let i = 1; i <= num; i++) {
        table[i + 1] = Math.min(table[x] * 2, Math.min(table[y] * 3, table[z] * 5));
        if (table[i + 1] == table[x] * 2) x++;
        if (table[i + 1] == table[y] * 3) y++;
        if (table[i + 1] == table[z] * 5) z++;
    }
    return table[num];


}




console.log(nthUglyTab(150));