function concatenateArrays(A, K) {
    function concatenateHelper(A, K, i) {
        if (i === K) {
            return [];
        }
        return A.concat(concatenateHelper(A, K, i + 1));
    }

    return concatenateHelper(A, K, 0);
}
let a = [1, 2, 3, 4]
console.log(a.concat(a))


let start = 0;
let end = 5;

const key = `${start}-${end}`;