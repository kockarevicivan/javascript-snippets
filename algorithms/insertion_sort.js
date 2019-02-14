export function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        let current = array[i];
      
        for (var j = i - 1; j > -1 && array[j] > current; j--)
            array[j + 1] = array[j];
      
        array[j + 1] = current;
    }
  
    return array;
}