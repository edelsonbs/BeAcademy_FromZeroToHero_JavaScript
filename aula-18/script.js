/* Estruturas de Repetição */

// For
console.log('For:')
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log('For (usando "continue"):')
for (let i = 1; i <= 10; i++) {
    if(i===5) {
        // break
        continue
    }
    console.log(i)
}

// While (Enquanto)
console.log('While:')
let interator = 1
while (interator <= 20) {
    console.log(interator)
    // incremento
    interator++
}

// For of
// Array
console.log('For of:')
let number = [2,4,3,5,6]
// num = number (For of)
// For of (Valores do Array)
for (num of number) {
    if (num > 4) {
        console.log(num)
    }
}

let names = ['Maria','Pedro','João','Jenifer','Luan']

for (name of names) {
    console.log(name)
}

// For in
console.log('For in:')
let animals = {
    name: 'Leão',
    weight: 200,
    age: 4
}
// Tipo 1 para capturar valores de objeto em um For in
console.log('Capturando um valor do objeto:')
for (item in animals) {
    console.log(animals["age"])
}
// Tipo 2 para capturar todo o objeto
console.log('Capturando todo o objeto:')
for (item in animals) {
    console.log(animals)
}
// Tipo 3 mosta os valores dentro das propriedades
console.log('Mostrando os valores dentro das propriedades:')
for (item in animals) {
    console.log(animals[item])
}
// Tipo 4 capturar valores individuais das propriedades de um objeto
console.log('Capturando valores individuais:')
for (item in animals) {
    console.log(animals.name)
}

// Usando for in em um array
console.log('Usando for in em um array:')
let arrayName = ['Moacir','Regis','Luan','Jenifer']

for (item in arrayName) {
    // console.log(arrayName) // Mostra todo o array
    console.log(arrayName[item]) // Mostra todos os valores
    // console.log(arrayName[2]) // Mostra diretamente um vetor
    /// console.log(item) // Index dos vetores (Posições)
}
