

const num: number = 10
const str: string = 'xrz'
const isTrue: boolean = true 

interface IUser {
    name: string
    age: number
    gender: Gender
}

enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    UNDEFINED = 'UNDEFINED',
    OTHER = 'OTHER'
}

const user: IUser = {
    name: 'Aaron',
    age: 20,
    gender: Gender.MALE
}

console.log(user)
console.log(Gender)

const a: any  = true // so any can tale anything

function sum(a: number, b: number, c?: number): any {
    return c ? a + b + c : a + b
}

console.log(sum(20, 30))
console.log(sum(20, 12, 40))