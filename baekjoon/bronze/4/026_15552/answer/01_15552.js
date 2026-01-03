const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout
});
let countdown = 0;
let result = '';

rl.on("line", (input) => {
    let [a, b] = input.split(' ').map(Number);

    if (typeof b === 'undefined') countdown += a;
    else result += `${a + b}\n`;

    if (countdown <= 0) {
        console.log(result.trim());
        rl.close();
    } else {
        countdown--;
    }

}).on("close", function () {
    process.exit();
});
