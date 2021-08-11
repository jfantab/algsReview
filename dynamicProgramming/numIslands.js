class Queue {
    constructor() {
        this.size = 0;
        this.queue = [];
    }

    push(val) {
        this.queue.push(val);
        this.size++;
    }

    pop() {
        if (this.size === 0) return;
        const ele = this.queue.shift();
        this.size--;
        return ele;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const findIslands = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    const q = new Queue();
    const visited = Array.from({ length: grid.length }, () =>
        Array.from({ length: grid[0].length }, () => 0)
    );

    let numIslands = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !(visited[i][j] === 1)) {
                q.push([i, j]);
                numIslands++;
            }

            while (!q.isEmpty()) {
                const [x, y] = q.pop();
                visited[x][y] = 1;
                if (
                    x > 0 &&
                    grid[x - 1][y] === 1 &&
                    !(visited[x - 1][y] === 1)
                ) {
                    q.push([x - 1, y]);
                }
                if (y > 0 && grid[x][y - 1] === 1 && !(visited[x][y - 1] === 1))
                    q.push([x, y - 1]);
                if (
                    y < n - 1 &&
                    grid[x][y + 1] === 1 &&
                    !(visited[x][y + 1] === 1)
                )
                    q.push([x, y + 1]);
                if (
                    x < m - 1 &&
                    grid[x + 1][y] === 1 &&
                    !(visited[x + 1][y] === 1)
                )
                    q.push([x + 1, y]);
            }
        }
    }

    return numIslands;
};

const grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

const grid2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
];

const grid3 = [
    [1, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 1, 1],
];
const grid4 = [
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 0, 1],
];

console.log("Number of islands: ", findIslands(grid), "\n");
console.log("Number of islands: ", findIslands(grid2), "\n");
console.log("Number of islands: ", findIslands(grid3), "\n");
console.log("Number of islands: ", findIslands(grid4), "\n");
