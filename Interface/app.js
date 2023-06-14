function printName(obj) {
    console.log("This person is called ".concat(obj.name, " and is ").concat(obj.age, " years old"));
}
var p1 = { name: 'Pedro', age: 21 };
printName(p1);
var p2 = { name: 'João' };
