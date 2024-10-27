function solveSudoku(values) {
    const emptyCell = findEmptyCell(values);
    if (!emptyCell) {
        return true;
    }
    const [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) {
        if (isValid(values, num, row, col)) { //check if num is valid to be assigned to the empty cell
            values[row][col] = num; //assign value

            if (solveSudoku(values)) { //Recursion
                return true;
            }

            values[row][col] = 0;
        }
    }

    return false;
}

function findEmptyCell(values) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (values[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null;
}

function isValid(values, num, row, col) {
    // Check all cell in the similar row
    for (let i = 0; i < 9; i++) {
        if (values[row][i] === num) {
            return false;
        }
    }

    // Check all cell in the similar col
    for (let i = 0; i < 9; i++) {
        if (values[i][col] === num) {
            return false;
        }
    }

    // Check all cell in the grid 3x3
    const startRow = row - row % 3;
    const startCol = col - col % 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (values[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }

    return true;
}