class Animal{
    andar(){
        console.log('O animal andou')
    }
}

class Cachorro extends Animal{
    nome: string
    constructor(nome: string){
        super()
        this.nome = nome
    }
    lartir(){
        console.log('Au Au')
    }
}