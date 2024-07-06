// Контекст задания:

// Вы работаете с парсером или API, который предоставляет строки, потенциально содержащие даты.
// Некоторые строки действительно являются датами, другие нет.
// Примеры входных данных:

// Верные даты: "10.02.22", "11.12.23"
// Неверные данные: "0.13.22", "41.12"
// Задание:

// Разработайте функцию, принимающую массив строк.
// Функция должна анализировать каждую строку:
// Отфильтровать невалидные даты.
// Преобразовать валидные даты к единому формату.
// Условия валидации дат:

// Форматы дат: DD.MM.YY или MM/DD/YY.
// День не может быть больше 31.
// Месяц не может быть больше 12.
// Учитывать високосные года для февраля (опционально).
// Результат:

// Отфильтрованный и преобразованный массив содержащий только даты в едином формате.

function filterDates(arr) {
    const filteredArr = arr
        .filter(date => {
            if (!splitDate(date)) {
                return false;
            }

            const [day, month, year] = splitDate(date);

            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                return false;
            }
            const parsedDate = new Date(`${day}-${month}-${year}`);
            return !isNaN(parsedDate.getTime());
        })
        .map(date => {
            const [day, month, year] = splitDate(date);
            return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
        });

    return filteredArr;
}

function splitDate(date) {
    if (!(date.indexOf('.') === -1)) {
        return date.split('.').map(Number);
        
    }
    if (!(date.indexOf('/') === -1)) {
        const [month, day, year] = date.split('/').map(Number);
        return [day, month, year];
    }
    return false;
}

console.log(filterDates(["10.02.22", "11/12/23", "0.13.22", "41.12"]));