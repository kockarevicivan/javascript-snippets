export function belowMainDiagonal(matrix) {
    for(let i = 0; i < matrix.length; i++)
        for(let j = 0; j < matrix[i].length; j++)
            if(i > j)
                console.log(matrix[i][j]);
}