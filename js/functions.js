const checkStringLength = (string, length) => string.length <= length;

// eslint-disable-next-line no-console
console.log(checkStringLength('проверяемая строка', 20));
// eslint-disable-next-line no-console
console.log(checkStringLength('проверяемая строка', 18));
// eslint-disable-next-line no-console
console.log(checkStringLength('проверяемая строка', 10));

const isPalindrom = (rawString) => {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-console
console.log(isPalindrom('топот'));
// eslint-disable-next-line no-console
console.log(isPalindrom('ДовОд'));
// eslint-disable-next-line no-console
console.log(isPalindrom('Кекс'));
// eslint-disable-next-line no-console
console.log(isPalindrom('Лёша на полке клопа нашёл'));

const extractNumber = (arg) => {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

// eslint-disable-next-line no-console
console.log(extractNumber('2023 год'));
// eslint-disable-next-line no-console
console.log(extractNumber('ECMAScript 2022'));
// eslint-disable-next-line no-console
console.log(extractNumber('1 кефир, 0.5 батона'));
// eslint-disable-next-line no-console
console.log(extractNumber('а я томат'));
