//Написать функцию, которая возвращает массив из чисел Фибоначчи(https://bit.ly/3a9t5C3). 
//Длина массива - число переданное аргументом функции.




function fib(size){
    let n1 = 0;
    let n2 = 1;
    let nextNum;
    let arr = [0, 1];
    for (let i = 1; i <= size-2; i++) {
        
        nextNum= n1 + n2;
        n1 = n2;
        n2 = nextNum;
        arr.push(nextNum)
    }
    console.log(arr);
}

console.log(fib(10));
console.log(fib(4));
console.log(fib(6));