function cleanArray (array, func) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (func(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}

function isEven (num) {
    return num % 2 === 0;
}

console.log(cleanArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven));
