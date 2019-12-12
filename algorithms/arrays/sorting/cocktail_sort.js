import { swap } from '../../../util/functions';

export function cocktailSort(array, beginIndex, endIndex) {
	// TODO: To be implemented.
    let iteration = 0;
    let i = 0;

    while(iteration != Math.floor(array.length / 2)) {
        if(i == iteration || i == array.length - iteration)
            iteration++;

        i = iteration % 2 ? i+1 : i-1;

        console.log(i);
    }
}