function printName(
    obj: {name: string, age: number})
{
    console.log(`This person is called ${obj.name} and is ${obj.age} years old`)
}

let p1 = {name: 'Pedro', age: 21}
printName(p1)

let p2 = {name: 'João'}