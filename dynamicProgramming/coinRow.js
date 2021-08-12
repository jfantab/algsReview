const solveIter = (coins, C) => {
    C[0] = 0;
    C[1] = coins[0];

    for (let i = 2; i < coins.length; i++) {
        C[i] = Math.max(coins[i] + C[i - 2], C[i - 1]);
        console.log(C);
    }

    return C[coins.length - 1];
};

const solve = (coins, C, i = 2) => {
    if (i >= coins.length) return C[coins.length - 1];
    C[i] = Math.max(coins[i] + C[i - 2], C[i - 1]);
    console.log(C);
    return solve(coins, C, i + 1);
};

const coins = [5, 1, 2, 10, 6, 2];
const C = Array.from({ length: coins.length }, () => 0);
C[0] = 0;
C[1] = coins[0];
console.log(solve(coins, C));
