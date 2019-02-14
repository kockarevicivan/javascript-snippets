export function transpose(matrix) {
    let transposed = [];

    for(let i = 0; i < matrix.length; i++) {
        transposed.push([]);

        for(let j = 0; j < matrix[i].length; j++)
            transposed[i].push(matrix[j][i]);
    }

    return transposed;
}