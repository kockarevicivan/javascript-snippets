export function flipHorizontal(matrix) {
    let flipped = [];

    for(let i = matrix.length - 1; i >= 0; i--) {
        let temporary = [];

        for(let j = 0; j < matrix[i].length; j++)
            temporary.push(matrix[i][j]);

        flipped.push(temporary);
    }

    return flipped;
}