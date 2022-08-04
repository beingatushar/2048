function moveUp() {
    for (let col = 0; col < 4; col++) {
        moveAllToUp(col);
        for (let row = 0; row < 3; row++) {
            if (board[row][col] == 0) {
                break;
            }
            if (board[row][col] == board[row + 1][col]) {
                board[row][col] = 2 * board[row][col];
                board[row + 1][col] = 0;
                moveAllToUp(col);
            }

        }
    }

}

function moveDown() {
    for (let col = 0; col < 4; col++) {
        moveAllToDown(col);
        for (let row = 3; row >= 1; row--) {
            if (board[row][col] == 0) {
                break;
            }
            if (board[row][col] == board[row - 1][col]) {
                board[row][col] = 2 * board[row][col];
                board[row - 1][col] = 0;
                moveAllToDown(col);
            }

        }
    }
}

function moveLeft() {
    for (let row = 0; row < 4; row++) {
        moveAllToLeft(row);
        for (let col = 0; col < 3; col++) {
            if (board[row][col] == 0) {
                break;
            }
            if (board[row][col] == board[row][col + 1]) {
                board[row][col] = 2 * board[row][col];
                board[row][col + 1] = 0;
                moveAllToLeft(row);
            }
        }
    }
}

function moveRight() {
    for (let row = 0; row < 4; row++) {
        moveAllToRight(row);
        for (let col = 3; col >= 1; col--) {
            if (board[row][col] == 0) {
                break;
            }
            if (board[row][col] == board[row][col - 1]) {
                board[row][col] = 2 * board[row][col];
                board[row][col - 1] = 0;
                moveAllToRight(row);
            }
        }
    }
}

function moveAllToLeft(row) {
    let start = 0;
    for (let col = 0; col < 4; col++) {
        if (board[row][col] != 0) {
            board[row][start] = board[row][col];
            start++;
        }
    }
    for (; start < 4; start++) {
        board[row][start] = 0;
    }
}

function moveAllToRight(row) {
    let start = 3;
    for (let col = 3; col >= 0; col--) {
        if (board[row][col] != 0) {
            board[row][start] = board[row][col];
            start--;
        }
    }
    for (; start >= 0; start--) {
        board[row][start] = 0;
    }
}

function moveAllToDown(col) {
    let start = 3;
    for (let row = 3; row >= 0; row--) {
        if (board[row][col] != 0) {
            board[start][col] = board[row][col];
            start--;
        }
    }
    for (; start >= 0; start--) {
        board[start][col] = 0;
    }
}

function moveAllToUp(col) {
    let start = 0;
    for (let row = 0; row < 4; row++) {
        if (board[row][col] != 0) {
            board[start][col] = board[row][col];
            start++;
        }
    }
    for (; start < 4; start++) {
        board[start][col] = 0;
    }
}