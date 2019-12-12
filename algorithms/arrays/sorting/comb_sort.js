import { swap } from '../../../util/functions';

export function combSort(array) {
    let span = array.length;
    let i = 0;
    
    while(span > 1) {

        let endElementIndex = i + span - 1;

        while(endElementIndex < array.length) {
            if(array[i] > array[endElementIndex])
                swap(array, i, endElementIndex);
            
            i++;
            endElementIndex = i + span - 1;
        }

        span = Math.floor(span / 1.3);
        i = 0;
    }
}