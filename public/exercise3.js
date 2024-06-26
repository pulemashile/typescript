var calculator = function (a, b) {
    return a + b;
};
console.log(calculator(3, 2));
var fixednumber = function () {
    return 8;
};
var result = fixednumber();
console.log(result);
function STRINGCHECK(str, toUppercase) {
    if (toUppercase === true) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
}
console.log(STRINGCHECK("PULE"));
console.log(STRINGCHECK("BEGINNER", true));
console.log(STRINGCHECK("HELLO", false));
