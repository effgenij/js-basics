// Цель: Реализовать сортировку массива чисел с помощью циклов.
// Задание: Написать функцию, принимающую массив чисел и параметр сортировки (по убыванию или возрастанию) и возвращающую отсортированный массив.

function sortArray(arr, sortType) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sortType === 'asc') {
                if (arr[i] > arr[j]) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            } else if (sortType === 'desc') {
                if (arr[i] < arr[j]) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}

console.log(sortArray([1, 40, -5, 10, 0], 'desc'));