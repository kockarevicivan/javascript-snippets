export function mergeSort(array) {
    function concatenate(left, right) {
        let result = [];
        let indexLeft = 0;
        let indexRight = 0;
    
        while (indexLeft < left.length && indexRight < right.length) {
            let leftElement = left[indexLeft];
            let rightElement = right[indexRight];

            if (leftElement < rightElement) {
                result.push(leftElement);
                indexLeft++;
            } else {
                result.push(rightElement);
                indexRight++;
            }
        }
        
          return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }
    
    if (array.length === 1) return array;
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return concatenate(
        mergeSort(left),
        mergeSort(right)
    );
}