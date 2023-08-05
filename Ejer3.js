function solution(inputString) {
    inputString = inputString.replace(/\s/g, "").toLowerCase();
    const reversedString = inputString.split("").reverse().join("");
    return inputString === reversedString;
}