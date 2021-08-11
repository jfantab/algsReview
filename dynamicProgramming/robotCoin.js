/*
const findPath = (grid, i = 0) => {
    const n = grid.length;
    const m = grid[0].length;

    if (i >= n) return;
    if (i > 0) {
        grid[i][0] += grid[i - 1][0];

        for (let j = 1; j < m; j++) {
            grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    findPath(grid, i + 1);

    console.log(grid);

    return grid[n - 1][m - 1];
};
*/

/*
const findPath = (grid, i = 0, j = 0) => {
    if (i >= grid.length || j >= grid[0].length) return;

    findPath(grid, i + 1, j);

    if (i === 0 && j > 0) {
        grid[i][j] += grid[i][j - 1];
    } else if (j === 0 && i > 0) {
        grid[i][j] += grid[i - 1][j];
    } else if (i > 0 && j > 0) {
        if (grid[i][j] > 1)
            grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
        else grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }

    findPath(grid, i, j + 1);

    console.log(grid);

    return grid[grid.length - 1][grid[0].length - 1];
};
*/

/*
const grid = [
    [0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0],
];

const grid2 = [
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
];
*/

const findPath = (grid, i = 0) => {
    const n = grid.length;
    const m = grid[0].length;

    if (i >= n) return;
    if (i > 0) {
        grid[i][0] += grid[i - 1][0];

        for (let j = 1; j < m; j++) {
            if (grid[i][j] !== -1)
                grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    findPath(grid, i + 1);

    console.log(grid);

    return grid[n - 1][m - 1];
};

const grid = [
    [0, 0, 0, -1, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [-1, -1, 0, 1, -1, 1],
    [0, 0, 1, -1, 0, 1],
    [1, 0, 0, 0, 1, 0],
];

console.log(findPath(grid));

//console.log(findPath(grid2));
