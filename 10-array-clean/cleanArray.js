function cleanArray (array, func) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (func(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}
