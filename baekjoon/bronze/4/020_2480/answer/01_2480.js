const input = require('fs').readFileSync(0, 'utf8').split(' ');
const diceList = input.map(Number);

const diceComparison = function (diceList) {
    let index;

    const diceCount = [0, 0, 0, 0, 0, 0];
    diceList.forEach(pips => {
        index = pips - 1;
        diceCount[index] += 1;
    });

    let targetDice = 0;
    let targetCount = 1;
    for (let pips = 1; pips <= 6; pips++) {
        index = pips - 1;

        if (diceCount[index] === 2 || diceCount[index] === 3) {
            targetDice = pips;
            targetCount = diceCount[index];
            break;
        }

        if (pips === 6) {
            targetDice = diceCount.lastIndexOf(1) + 1;
            targetCount = 1;
        }
    }
    
    return [targetDice, targetCount];
};

const diceRule = function (target) {
    const [targetDice, targetCount] = target;
    let price = 0;

    switch (targetCount) {
        case 2:
            price = 1000 + targetDice * 100;
            break;

        case 3:
            price = 10000 + targetDice * 1000;
            break;

        default:
            price = targetDice * 100;
    }

    return price;
};

console.log(diceRule(diceComparison(diceList)));
