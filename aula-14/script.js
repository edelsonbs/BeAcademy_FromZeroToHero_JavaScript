/* Manipulando String e Array */

// Manipulando Arrays
const animals = ["Galo","Cachorro","Elefante","Girafa","Leão"] // 4 (length 5)
console.log(animals)

// Adicionar item no fim do array
console.log('Adicionando item no fim do array:')
console.log(animals.push("Rato"))
console.log(animals)

// Adicionar item no começo do array
console.log('Adicionando item no começo do array:')
console.log(animals.unshift("Porco"))
console.log(animals)

// Remover item do fim
console.log('Removendo item no fim do array:')
console.log(animals.pop())
console.log(animals)

// Remover item do começo
console.log('Removendo item no começo do array:')
console.log(animals.shift())
console.log(animals)

// Pegar somente alguns elementos do Array
// Não modificar o Array
console.log('Função slice():')
console.log(animals.slice(0,3))
console.log(animals)

// Remover 1 ou mais itens do Array
console.log('Função splice():')
console.log(animals.slice(1,3))

// Encontrar a posição do Array
console.log('Encontrar a posição do Array:')
let index = animals.indexOf('Cachorro')
console.log(index)
animals.splice(index, 1)
console.log(animals)