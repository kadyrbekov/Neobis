//Написать функцию, 
//которая находит факториал(https://bit.ly/3bi0wlQ) числа, 
//переданного аргументом.

//0! = 1 1!= 1 2! = 1 *2 = 2
function factorial(num){
    let result;
    if(num == 0 || num == 1){
        
        return 1;
    }else{
        result = num * factorial(num - 1);
        return result;
    }

}

console.log(factorial(5))