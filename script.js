class MatrixElement {
    #rowIndex;
    #colIndex;
    #value;

    constructor(rowIndex, colIndex, value) {
        this.#rowIndex = rowIndex;
        this.#colIndex = colIndex;
        this.#value = value;
    }

    toString() {
        return `[(${this.#rowIndex}, ${this.#colIndex}); ${this.#value}]`;
    }
}

function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

function getRandomInteger(rndMin = 0, rndMax = 9) {
    return Math.floor(Math.random() * (rndMax - rndMin + 1)) + rndMin;
}

function getArrayOfLength(length) {
    return Array.from({length});
}

function getRandomIntegerArray(length, min, max) {
    return getArrayOfLength(length).map(() => getRandomInteger(min, max));
}

function getRandomIntegerMatrix(rows, cols, min, max) {
    return getArrayOfLength(rows).map(() => getRandomIntegerArray(cols, min, max));
}

function getRandomSquareMatrix(size, rndMin, rndMax) {
    return getRandomIntegerMatrix(size, size, rndMin, rndMax);
}

function getArrayMin(arr) {
    return Math.min(...arr);
}

function getArrayMax(arr) {
    return Math.max(...arr);
}

function getMinFromEachMatrixRow(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    min = [];

    for (let i = 0; i < rows; i++) {
        min[i] = Infinity;
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] < min[i]) min[i] = matrix[i][j];
        }
    }

    return min;
}

function getMaxFromEachMatrixCol(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    max = [];

    for (let j = 0; j < cols; j++) {
        max[j] = -Infinity;
        for (let i = 0; i < rows; i++) {
            if (matrix[i][j] > max[j]) max[j] = matrix[i][j];
        }
    }

    return max;
}

function getSaddlePointsOfMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const min = getMinFromEachMatrixRow(matrix);
    const max = getMaxFromEachMatrixCol(matrix);
    const saddlePoints = [];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == min[i] && matrix[i][j] == max[j]) {
                saddlePoints.push(new MatrixElement(i, j, matrix[i][j]));
            }
        }
    }

    return saddlePoints;
}

const matrix = getRandomSquareMatrix(3);
printMatrix(matrix);
console.log("");

const saddlePoints = getSaddlePointsOfMatrix(matrix);
saddlePoints.forEach(item => console.log(item.toString()));