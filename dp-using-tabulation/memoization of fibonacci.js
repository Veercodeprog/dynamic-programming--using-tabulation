let calculations = 0;

function fibonacci(n) { //0(2^n)


    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// const fibonacci = (n) => {
//     if (n < 2) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

function fibonacciMaster() {
    let cache = {};

    return function fib(n) {
        calculations++;
        // if (cache[n])
        if (n in cache) {
            return cache[n];

        } else {
            if (n <= 2) {
                return 1;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}
//alternative way to write memoized fib
function fibonacciMemoized(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    const result = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    memo[n] = result;
    return result;
}

//alternative way to write memoized fib
function fibonacciMemoized(n, memo = []) {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    const result = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    memo[n] = result;
    return result;
}

const fasterFib = fibonacciMaster();
console.log('DP', fasterFib(3));
console.log('No. of calculations in DP = ' + calculations);

// console.log(fibonacci(2));


// time: O(n)
// space: O(n)
const fibTabulation = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}

console.log(fibTabulation(6));
console.log(fibTabulation(7));
console.log(fibTabulation(8));
console.log(fibTabulation(1));