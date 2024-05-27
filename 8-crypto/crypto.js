// Задача:
// Необходимо написать две функции: одна для шифрования пароля и другая для его проверки.
// Шифратор пароля:
// Функция принимает строку (пароль) для шифрования.
// По заданному алгоритму происходит перестановка символов в строке.
// Алгоритм примера: меняем местами символы (середину с первым, второй с последним и т.д.).
// Важно: шифрование должно быть обратимым.
// Проверка пароля:
// Функция сравнивает зашифрованное слово с исходным паролем.
// Если после дешифровки полученный результат совпадает с исходным паролем, функция возвращает true.
// В противном случае — false.

function encrypt(password) {
    const arr = password.split('');
    const middle = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middle).reverse();
    const secondHalf = arr.slice(middle, arr.length).reverse();
    return firstHalf.concat(secondHalf).join('');
}

function checkPassword(password, encryptedPassword) {
    const arr = encryptedPassword.split('');
    const middle = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middle).reverse();
    const secondHalf = arr.slice(middle, arr.length).reverse();
    return password === firstHalf.concat(secondHalf).join('');
}
console.log(checkPassword('123456789', '432198765'));