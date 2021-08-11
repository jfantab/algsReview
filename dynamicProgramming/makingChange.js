const makeChange = (n, coins) => {
    coins = coins.sort((a, b) => b - a);
    let numCoins = 0;
    for (let coinValue = 0; coinValue < coins.length; coinValue++) {
        if (n >= coins[coinValue]) {
            const numCoinsDivisible = Math.floor(n / coins[coinValue]);
            numCoins += numCoinsDivisible;
            n -= coins[coinValue] * numCoinsDivisible;
        }
    }
    return numCoins;
};
console.log(makeChange(12, [1, 6, 10]));
