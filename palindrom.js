//Написать функцию, которая принимает аргументом слово, 
//и проверяет палиндром(https://bit.ly/2vFgIyH) ли это,
// и возвращать true или false, соответственно.

function palindrom(word){
    var lowCaseWord = word.toLowerCase()
    var reversedWord = lowCaseWord.split('').reverse().join('');
    if(lowCaseWord == reversedWord){
        return true;
    }

    return false;
}

console.log(palindrom('топот')) //true
console.log(palindrom('rupipur')) //true
console.log(palindrom('тпот')) //fasle