function luhnAlgorithm(cardNumber) {

    const digits = cardNumber.split('-').join('').split('').map(Number);

    for (let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;
      if (digits[i] > 9) {
        digits[i] -= 9;
      }
    }

    return digits.reduce((sum, digit) => sum + digit, 0) % 10 === 0;
  }
  

console.log(luhnAlgorithm('4561-1213-4367-2612'));