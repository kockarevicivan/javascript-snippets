import {bubbleSort} from './algorithms/bubble_sort';
import {mergeSort} from './algorithms/merge_sort';
import {quickSort} from './algorithms/quick_sort';

const array = [4, 1, 2, 3, 0, 5];

console.log(bubbleSort(array));
console.log(mergeSort(array));
console.log(quickSort(array, 0, array.length - 1));