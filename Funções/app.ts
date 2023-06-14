function somar(x: number, y: number): number{
    return x + y
}

console.log(somar(5, 6))
console.log(somar(5,'5'))

function bemVindo(saudacao?: string, nome: string){
    if(saudacao){
        console.log(`Olá ${saudacao} ${nome}`)
    }else{
        console.log(`Olá ${nome}`)
    }
}

bemVindo('Sr. ', 'Mateus')
bemVindo(undefined, 'Lucas')