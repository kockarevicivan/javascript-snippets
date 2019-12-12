import { swap } from '../../../util/functions';

export function insertionSort(array) {
    for(i = 0; i < array.length; i++) {
        let j = i;

        while(j > 0 && array[j] < array[j-1]) {
            swap(array, j, --j);
        }
    }
}