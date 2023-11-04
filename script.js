function getJoinedArrayStr(arr, separator = ", ") {
    return arr.join(separator);
}

function printMatrix(matrix, itemSeparator = " ") {
    matrix.forEach(row => console.log(getJoinedArrayStr(row, itemSeparator)));
}

function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

function getRandomSquareIntegerMatrix(size, min, max) {
    return getRandomIntegerMatrix(size, size, min, max);
}

function getArrayMin(arr) {
    return Math.min(...arr);
}

function getArrayMax(arr) {
    return Math.max(...arr);
}

function getMatrixMinFromEachRow(matrix) {
    return matrix.reduce((min, row) => min.concat(getArrayMin(row)), []);
}

function getMatrixMaxFromEachCol(matrix) {
    return matrix.reduce((max, row) => max.map((item, index) => Math.max(item, row[index])), matrix[0]);
}

function getSaddlePointsOfMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const min = getMatrixMinFromEachRow(matrix);
    const max = getMatrixMaxFromEachCol(matrix);
    const saddlePoints = new Map();
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == min[i] && matrix[i][j] == max[j]) {
                saddlePoints.set([i, j], matrix[i][j]);
            }
        }
    }

    return saddlePoints;
}

const matrix = getRandomSquareIntegerMatrix(3);
const saddlePoints = getSaddlePointsOfMatrix(matrix);
const indices = Array.from(saddlePoints.keys());
const items = Array.from(saddlePoints.values());

printMatrix(matrix, "   ");
console.log(`\nIndices: [${getJoinedArrayStr(indices, "; ")}]`);
console.log(`Items: [${getJoinedArrayStr(items, "; ")}]`);