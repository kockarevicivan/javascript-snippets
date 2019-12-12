const array = [4, 1, 2, 3, 0, -326, 678, 5, 0];
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
const matrix = [[4, 7, 1],
                [2, 6, 8],
                [3, 9, 0]];

countingSort([0,0,1,2,2,0,1,1,2,1,1,1,2,0,0,2,0]);

function countingSort(array) {
    let counterArray = new Array(Math.max(...array) + 1).fill(0);
    let sortedArray = [];

    for(i = 0; i < array.length; i++)
        counterArray[array[i]]++;
    
    for(i = 0; i < counterArray.length; i++)
        for(j = 0; j < counterArray[i]; j++)
            sortedArray.push(i);
    
    return sortedArray;
}