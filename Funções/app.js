function somar(x, y) {
    return x + y;
}
console.log(somar(5, 6));
console.log(somar(5, '5'));
function bemVindo(saudacao, nome) {
    if (saudacao) {
        console.log("Ol\u00E1 ".concat(saudacao, " ").concat(nome));
    }
    else {
        console.log("Ol\u00E1 ".concat(nome));
    }
}
bemVindo('Sr. ', 'Mateus');
bemVindo(undefined, 'Lucas');
