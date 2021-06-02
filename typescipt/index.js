const num = 10;
const str = 'xrz';
const isTrue = true;
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["UNDEFINED"] = "UNDEFINED";
    Gender["OTHER"] = "OTHER";
})(Gender || (Gender = {}));
const user = {
    name: 'Aaron',
    age: 20,
    gender: Gender.MALE
};
console.log(user);
console.log(Gender);
function sum(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(sum(20, 30));
console.log(sum(20, 12, 40));
