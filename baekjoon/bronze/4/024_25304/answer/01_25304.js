const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [totalPrice, totalQuantity] = input.slice(0, 2).map(Number);
const products = input.slice(2);
let sumPrice = 0;

for (const product of products) {
    const [productPrice, productQuantity] =  product.split(' ').map(Number);
    sumPrice += productPrice * productQuantity;
}

console.log(totalPrice === sumPrice ? 'Yes' : 'No');
