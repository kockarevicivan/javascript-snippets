import {bubbleSort} from './algorithms/arrays/sorting/bubble_sort';
import {mergeSort} from './algorithms/arrays/sorting/merge_sort';
import {quickSort} from './algorithms/arrays/sorting/quick_sort';
import {insertionSort} from './algorithms/arrays/sorting/insertion_sort';
import {maximumElement} from './algorithms/arrays/maximum_element';
import {minimumElement} from './algorithms/arrays/minimum_element';

const array = [4, 1, 2, 3, 0, -326, 678, 5, 0];

// console.log(bubbleSort(array));
// console.log(mergeSort(array));
// console.log(quickSort(array, 0, array.length - 1));
// console.log(insertionSort(array));
// console.log(maximumElement(array));
console.log(minimumElement(array));