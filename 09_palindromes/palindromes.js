const palindromes = function (string) {
    const alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter(char => alphaNum.includes(char))
        .join('');

    const reversedString = cleanedString.split("").reverse().join("");

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
