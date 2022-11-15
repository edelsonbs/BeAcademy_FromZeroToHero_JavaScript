/* Manipulando String e Array */

// Separando um texto que contém espaços, em um novo array onde cada texto é uma posição do array.

let newPhrase = "Fala meus queridos e queridas"
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

// Convertendo novamente o texto para string
// .join(" ") -> Permite que eu gere separações ( - , _ / '')

let phraseModify = phraseToArray.join(" ").toLowerCase()
console.log(phraseModify)

// Manipulando Strings e Arrays
// Verificando se contém palavras ou letras
console.log("Função includes:")
let stringInclude = "Vem ne mim PayLivre, pay pay"
console.log(stringInclude.includes("PayLivre"))

// Objetos
let arrayInclude = [
    "PayLivre",
    "Vem",
    "ne mim",
    "meu amor",
    {
        firstName: "Pay",
        lastName: "Livre"
    }
]
console.log(arrayInclude.includes("meu amor"))

// Sting startWith
console.log("Função startsWith:")
console.log(stringInclude.startsWith("Ve"))

// String endsWith
console.log("Função endsWith:")
console.log(stringInclude.endsWith("ay"))

// Transformando um Array em caracteres
let wordToArray = "Quem tá gostando diz Hey!!"
console.log(Array.from(wordToArray))