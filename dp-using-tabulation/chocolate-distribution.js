function chocolateDistribution(arr, m) {
    // sort the input array
    arr.sort(function(a, b) {
        return a - b;
    });

    const n = arr.length;

    // initialize the dp array
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(Infinity));

    // initialize the first row and first column of dp array
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 0;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 0;
    }

    // initialize the second row of dp array
    for (let j = 1; j <= n; j++) {
        dp[1][j] = arr[j - 1] - arr[0];
    }

    // fill the dp array using the recurrence relation
    for (let i = 2; i <= m; i++) {
        for (let j = i; j <= n; j++) {
            for (let k = i - 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + arr[j - 1] - arr[k]);
            }
        }
    }

    // return the minimum difference
    return dp[m][n];
}