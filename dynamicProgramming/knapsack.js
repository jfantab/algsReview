const solve = (items, CAPACITY, K, i = 1) => {
    if (i > items.length) return K[items.length][CAPACITY];
    const p = items[i - 1].p;
    const w = items[i - 1].w;
    for (let j = 1; j <= CAPACITY; j++) {
        K[i][j] =
            j < w
                ? K[i - 1][j - 1]
                : Math.max(K[i - 1][j], K[i - 1][j - w] + p);
    }
    console.log(K);
    return solve(items, CAPACITY, K, i + 1);
};

/*
const solve = (items, CAPACITY, K) => {
    for (let i = 1; i <= items.length; i++) {
        const p = items[i - 1].p;
        const w = items[i - 1].w;
        for (let j = 1; j <= CAPACITY; j++) {
            K[i][j] =
                j < w
                    ? K[i - 1][j - 1]
                    : Math.max(K[i - 1][j], K[i - 1][j - w] + p);
        }
    }

    console.log(K);

    return K[items.length][CAPACITY];
};
 */

/*
const solve = (items, CAPACITY) => {
    if (items.length === 0 || CAPACITY <= 0) return 0;

    const curPrice = items[0].p;
    const curWeight = items[0].w;

    if (CAPACITY - curWeight < 0) return solve(items.slice(1), CAPACITY);

    return Math.max(
        curPrice,
        curPrice + solve(items.slice(1), CAPACITY - curWeight)
    );
};
*/

const CAPACITY = 10;
const items = [
    { w: 4, p: 1 },
    { w: 8, p: 9 },
    { w: 12, p: 7 },
    { w: 5, p: 5 },
    { w: 7, p: 6 },
];
const K = Array.from({ length: items.length + 1 }, () =>
    Array.from({ length: CAPACITY + 1 }, () => 0)
);

const CAPACITY2 = 6;
const items2 = [
    { w: 5, p: 8 },
    { w: 1, p: 4 },
    { w: 3, p: 6 },
];
const K2 = Array.from({ length: items2.length + 1 }, () =>
    Array.from({ length: CAPACITY2 + 1 }, () => 0)
);

const CAPACITY3 = 3;
const items3 = [
    { w: 2, p: 6 },
    { w: 1, p: 1 },
    { w: 2, p: 5 },
];
const K3 = Array.from({ length: items3.length + 1 }, () =>
    Array.from({ length: CAPACITY3 + 1 }, () => 0)
);

const CAPACITY4 = 5;
const items4 = [
    { w: 2, p: 12 },
    { w: 1, p: 10 },
    { w: 3, p: 20 },
    { w: 2, p: 15 },
];
const K4 = Array.from({ length: items4.length + 1 }, () =>
    Array.from({ length: CAPACITY4 + 1 }, () => 0)
);

/*
console.log("Max cost: ", solve(items, CAPACITY), "\n\n");
console.log("Max cost: ", solve(items2, CAPACITY2), "\n\n");
console.log("Max cost: ", solve(items3, CAPACITY3), "\n\n");
*/

console.log("Max cost for 1: ", solve(items, CAPACITY, K), "\n\n");
console.log("Max cost for 2: ", solve(items2, CAPACITY2, K2), "\n\n");
console.log("Max cost for 3: ", solve(items3, CAPACITY3, K3), "\n\n");
console.log("Max cost for 4: ", solve(items4, CAPACITY4, K4), "\n\n");
