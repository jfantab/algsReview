const solve = (coins, C, i = 1) => {
    if (coins.length < i) return;
    console.log(i, coins[i - 1], C[i - 2], C[i - 1]);
    C[i] = i === 1 ? coins[0] : Math.max(C[i - 1], coins[i - 1] + C[i - 2]);
    console.log(C);
    return solve(coins, C, i + 1);
};

const coins = [5, 1, 2, 10, 6, 2];
console.log(
    solve(
        coins,
        Array.from({ length: coins.length + 1 }, () => 0)
    )
);
