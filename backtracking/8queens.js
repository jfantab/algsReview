const solve = (_col = 0) => {
    if (_col >= SIZE) return true;
    else if (_col < 0) return false;

    let col = _col,
        i = 0;

    for (let x = 0; x < SIZE; x++) {
        if (board[x][col] === 1) i = x + 1;
        board[x][col] = 0;
    }

    for (; i < SIZE; i++) {
        if (!isSpotValid(i, col)) break;
    }

    if (i >= SIZE) solve(col - 1);
    else {
        board[i][col] = 1;
        print();
        solve(col + 1);
    }
};

const isSpotValid = (i, col) => {
    return (
        checkHorizontal(i, col) ||
        checkVertical(i, col) ||
        checkDiagonal(i, col)
    );
};

const checkHorizontal = (i, j) => {
    for (let x = 0; x < SIZE; x++) {
        if (board[i][x] && x != j) return true;
    }
    return false;
};

const checkVertical = (i, j) => {
    for (let x = 0; x < SIZE; x++) {
        if (board[x][j] && x !== i && x !== j) return true;
    }
    return false;
};

const checkDiagonal = (i, j) => {
    for (let x = i, y = j; x < SIZE && y < SIZE; x++, y++) {
        if (board[x][y] && x !== i && y !== j) return true;
    }
    for (let x = i, y = j; x >= 0 && y < SIZE; x--, y++) {
        if (board[x][y] && x !== i && y !== j) return true;
    }
    for (let x = i, y = j; x < SIZE && y >= 0; x++, y--) {
        if (board[x][y] && x !== i && y !== j) return true;
    }
    for (let x = i, y = j; x >= 0 && y >= 0; x--, y--) {
        if (board[x][y] && x !== i && y !== j) return true;
    }
    return false;
};

const print = () => {
    board.forEach((b) => console.log(b));
    console.log("\n");
};

const SIZE = 4;
const board = [];
for (let i = 0; i < SIZE; i++) {
    board.push([]);
    for (let j = 0; j < SIZE; j++) {
        board[i].push(0);
    }
}

solve();
