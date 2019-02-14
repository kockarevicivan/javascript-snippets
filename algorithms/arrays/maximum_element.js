export function maximumElement(array) {
    let maximum = array[0];

    for(let i = 1; i < array.length; i++)
        if(maximum < array[i])
            maximum = array[i];

    return maximum;
}