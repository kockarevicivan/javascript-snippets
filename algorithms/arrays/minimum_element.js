export function minimumElement(array) {
    let minimum = array[0];

    for(let i = 1; i < array.length; i++)
        if(minimum > array[i])
            minimum = array[i];

    return minimum;
}