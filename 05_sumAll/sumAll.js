const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    let startNum = Math.min(num1, num2);
    let endNum = Math.max(num1, num2);

    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    }

    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
