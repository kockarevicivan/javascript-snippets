import { swap } from '../../../util/functions';

export function exchangeSort(array) {
    for(i = 0; i < array.length; i++) {        
        for(j = i+1; j < array.length; j++) {
            if(array[j] < array[i])
                swap(array, i, j);
        }
    }
}