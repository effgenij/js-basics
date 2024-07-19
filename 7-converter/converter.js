// Задание:

// Создать функцию конвертации валют, принимающую три параметра:
// Сумма для конвертации
// Исходная валюта
// Целевая валюта
// Пример работы функции:

// Примерно $1000 рублей к долларам вернет $30.
// Обработка ошибок:

// Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.
// Логика функции:

// В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
// Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
// Если курс конвертации для заданной пары валют отсутствует, возвращается null.
// Расширение функциональности:

// Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
// Протестируйте функцию с различными входными данными.

function convertCurrency(valueToConvert, sourceCurrency, targetCurrency) {
    const rates = {
        'RUB': {
            'USD': 0.014,
            'EUR': 0.012
        },
        'USD': {
            'RUB': 90,
            'EUR': 0.86
        },
        'EUR': {
            'RUB': 95,
            'USD': 1.16
        }
    };

    if (!rates[sourceCurrency] || !rates[targetCurrency]) {
        return null;
    }

    return valueToConvert * rates[sourceCurrency][targetCurrency];
}