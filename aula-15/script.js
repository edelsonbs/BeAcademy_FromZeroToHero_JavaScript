/* Operadores Lógicos */

// Operador Incremento e Decremento
// ++ --
let incrementNumber = 4
console.log(incrementNumber)
console.log('Incrementando:')
// +1
incrementNumber++ // 5
console.log(incrementNumber)
++incrementNumber // 6 +1
console.log(incrementNumber)

console.log('Decrementando:')
let decrementNumber = 50
console.log(decrementNumber)
decrementNumber-- // 49
console.log(decrementNumber)
decrementNumber-- // 48
console.log(decrementNumber)
decrementNumber-- // 47
console.log(decrementNumber)

// Operadores Aritméticos
// + - / * %
let note1 = 10
let note2 = 7.5
let note3 = 5.5
let note4 = 3.5
let avg = (note1+note2+note3+note4)/4
console.log('Operadores Aritméticos:')
console.log(Number(Math.round(avg))) // Arredondando
console.log(Number(Math.floor(avg))) // Arredondando para baixo

// Operadores Relacionais e Igualdade
// < > == === != !== >= <=
console.log('Operadores Relacionais e Igualdade:')
let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 // != Diferente
console.log(relation)
relation = numberRelation1 !== numberRelation2 // !== Diferente no valor ou diferente no tipo (OR)
console.log(relation)
relation = numberRelation1 == numberRelation2 // == Igual no valor
console.log(relation)
relation = numberRelation1 === numberRelation2 // == Igual no valor e no tipo (AND)
console.log(relation)

// Operador de Atribuição
console.log('Operador de Atribuição:')
let newNumber = 20
console.log(newNumber)
newNumber += 40
console.log(newNumber)
newNumber *= 3
console.log(newNumber)
newNumber -= 60
console.log(newNumber)
newNumber /= 6
console.log(newNumber)
newNumber %= 5
console.log(newNumber)

// Operadores Condicionais (Ternário)
// (condition) ? true : false
console.log('Operador Condicional (Ternário):')
let value = 24
let value2 = 32

const newCondition = value >= value2 ? 'Isso é verdade'
                            : value <= value2 ? 'Isso é verdade, segunda resposta true'
                            : 'Resposta falsa pra tudo!!'
console.log(newCondition)
