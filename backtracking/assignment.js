/*
const swap = (arr, i, j) => {
    const a = [...arr];
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    return a;
};

const heap = (arr, size, subsets) => {
    if (size === 1) subsets.push(arr);

    for (let i = 0; i < size; i++) {
        heap(arr, size - 1, subsets);
        arr = size % 2 === 0 ? swap(arr, 0, size - 1) : swap(arr, i, size - 1);
    }
    console.log(subsets);
    return subsets;
};

const solve = (arr) => {
    const indices = heap(
        arr.map((ele, index) => index),
        arr.length,
        []
    );
    const rowSize = arr[0].length;

    let cost = Number.MAX_VALUE;
    for (let i in indices) {
        let cnt = 0;
        let temp = 0;
        for (let j in indices[i]) {
            temp += arr[cnt][indices[i][j]];
            cnt += 1;
        }
        cost = Math.min(cost, temp);
    }
    return cost;
};
*/
/*
const solve = (arr, depth = 0, x = 0) => {
    if (depth >= arr.length) return;

    let cost = 0;

    //  Add first part of combo here
    cost += arr[0][x];

    for (let i = 0; i < arr.length; i++) {
        solve(arr, depth + 1, x + 1);
        cost += arr[i][x];
    }

    return cost;
};
*/

const solve = (arr) => {};

const matrix = [
    [9, 2, 7, 8],
    [6, 4, 3, 7],
    [5, 8, 1, 8],
    [7, 6, 9, 4],
];

console.log(solve(matrix));
