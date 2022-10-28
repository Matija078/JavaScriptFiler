let ad = [1, 2, 3, 4, 5, 6, 7]
function add(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; ++i) {
        result = numbers[i] + result;

    }
    console.log("Resultater er:", result);
    return result;
}
add(ad);
let su = [1, 2, 3, 4, 5, 6, 7]
function subtract(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; ++i) {
        result = numbers[i] - result;

    }
    console.log("Resultater er:", result);
    return result;
}
add(su);
let di = [1, 2, 3, 4, 5, 6, 7]
function divide(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; ++i) {
        result = numbers[i] / result;

    }
    console.log("Resultater er:", result);
    return result;
}
add(di);
let mu = [1, 2, 3, 4, 5, 6, 7]
function multiply(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; ++i) {
        result = numbers[i] * result;

    }
    console.log("Resultater er:", result);
    return result;
}
add(mu);
//høyeste nivå
let mathFunction = [1, 2, 3, 4, 5, 6, 7]
function logResult(mathFunction, number) {
    for (let i = 0; i < numbers.length; ++i) {
        result = mathFunction[i] + number
    }
    console.log(mathFunction(number));
    return result;
}