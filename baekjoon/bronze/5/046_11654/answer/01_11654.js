const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const number = '0123456789';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

let result;

if (number.includes(input)) {
    result = 48 + number.indexOf(input);

} else if (upperCase.includes(input)) {
    result = 65 + upperCase.indexOf(input);

} else if (lowerCase.includes(input)) {
    result = 97 + lowerCase.indexOf(input);
}

console.log(result);
