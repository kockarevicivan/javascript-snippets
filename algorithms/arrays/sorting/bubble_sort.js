import { swap } from '../../../util/functions';

export function bubbleSort(array) {
    for(i = 0; i < array.length; i++) {
        for(j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }
}