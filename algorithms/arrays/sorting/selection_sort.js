import { swap } from '../../../util/functions';

export function selectionSort(array) {
    for(i = 0; i < array.length; i++) {
        let minimumIndex = i;
        
        for(j = i+1; j < array.length; j++) {
            if(array[j] < array[minimumIndex])
                minimumIndex = j; 
        }

        swap(array, i, minimumIndex);
    }
}