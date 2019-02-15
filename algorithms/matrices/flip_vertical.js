export function flipVertical(matrix) {
    let flipped = [];

    for(let i = 0; i < matrix.length; i++) {
        let temporary = [];

        for(let j = matrix[i].length - 1; j >= 0; j--)
            temporary.push(matrix[i][j]);

        flipped.push(temporary);
    }

    return flipped;
}