// 1. Declare uma variável de nome person
let person

// 2. Que tipo de dado é a variável acima?
console.log(typeof person)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (Integer)
        * weight: Number (Float)
        * isAdmin: Boolean
        * isAMan: Boolean
*/
person = {
    name: "Moacir",    
    age: 30,
    weight: 69.5,
    isAdmin: true,
    isAMan: true
} 
/*
    4. A variável human abaixo é de que tipo de dados?
    Object

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        O humano <name> tem o peso <weight> kg.
*/

let human = {
    name: "Moacir",    
    age: 30,
    weight: 69.5,
    isAdmin: true,
    isAMan: true
}
console.log(typeof human)
console.log(`O humano ${human.name} tem o peso ${human.weight}kg`)

/*
    5. Declare uma variável do tipo Array, de nome humans e atribua a ela nenhum valor, ou seja, somente o Array vazio.

*/
let humans = []

/*
    6. Retribua um valor para a variável acima, colocando dentro dela o objeto human da questão 4. (Não copiar e colocar o objeto, mas usar o obleto criado inserir ele no Array)

*/
humans = [
    human
]
console.log(humans)

/*
    7. Coloque no console o valor da posição zero do Array acima

*/
console.log(humans[0].name)

/*
    8. Crie um novo objeto human e coloque na posição 1 do Array humans

    ou

    humans[1] = newwHuman
*/
let newHuman = {
    name: "Luan Monteiro",
    age: 30,
    weight: 90.1,
    isAdmin: true,
    isAMan: true
}
console.log(newHuman)

humans = [
    human,
    newHuman
]
console.log(humans)
console.log(humans[1])

/*
9. Sem rodar o código responda o resultado da saída abaixo: 
*/

//a)
//console.log(a)
//var a = 1
// Resposta: Undefined

// //b)
// let a
// console.log(a)
// {
//     let a = 2
//     console.log(a)
// }
// console.log(a)
// // Resposta: Undefined, 2 e undefined

// //c)
// console.log(b)
// {
//     let b = 3
//     console.log(b)
// }
// console.log(b)
// // Resposta: Gera um erro (b is not defined)

// //d)
// const c = 10
// {
//     console.log(c)
//     const c = 20
//     console.log(c)
// }
// Resposta: Gera um erro. Não é possível trocar o valor de uma constante
