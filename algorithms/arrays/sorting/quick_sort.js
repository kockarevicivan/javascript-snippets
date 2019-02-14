export function quickSort(array, beginIndex, endIndex) {
	let pivot;
	let partitionIndex;
 
	if(beginIndex < endIndex) {
		pivot = endIndex;
		partitionIndex = partition(array, pivot, beginIndex, endIndex);

		quickSort(array, beginIndex, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, endIndex);
	}

	return array;
}
		 
function partition(array, pivot, beginIndex, endIndex) {
	let pivotValue = array[pivot];
	let partitionIndex = beginIndex;
 
	for(let i = beginIndex; i < endIndex; i++) {
		if(array[i] < pivotValue){
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
   }
   
   swap(array, endIndex, partitionIndex);

   return partitionIndex;
}
		 
function swap(array, i, j){
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}