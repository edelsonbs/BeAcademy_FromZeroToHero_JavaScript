/*  Declarar uma variável */

// var name
// let name2
// const name3 // Precisa ser inicializada

let name = "Luan"
console.log(name)

// A variável foi sobescrita
name = 32
console.log(name)

// A variável foi sobescrita novamente
name = "Monteiro"
console.log(name)

// Constante
const nome = "Luan"
console.log(nome)
// nome = "Monteiro" // Esta linha retorna um erro no console

/* Globais */

// Hoisting -> var
console.log('Variável firstName existe aqui?', firstName)
{// Scope (bloco de código)
    // Local
    var firstName = "Luan"
}
console.log('Variável firstName existe aqui?', firstName)

console.log('------------------------------------')

// Locais
let person = "Luan"

console.log('Variável firstName existe aqui?', person)

{// Scope (bloco de código)
    // Local
    let person = "Jenifer"
    console.log('Variável firstName existe aqui?', person)
}

console.log('Variável firstName existe aqui?', person)