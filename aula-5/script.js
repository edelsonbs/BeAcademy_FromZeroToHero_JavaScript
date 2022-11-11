/*  Declarar Objetos */

const human = {
    name: "Luan",
    age: 30,
    weight: 90,
    isAthlete: true,
    walk: function walking() {
        console.log('Eu ando bastante!')
    }
}// Objeto

console.log(human)
console.log({human})
console.log(human.age)
console.log(human.name)
console.log(human.walk())

// Concatenar
console.log("O humano " + human.name + " tem a idade " + human.age)

// Interpolação
console.log(`O humano ${human.name} tem a idade ${human.age}`)

/* Array */

const animals = [
    "Elefante", // 0
    "Gato", // 1
    "Leão", // 2
    "Cachorro", // 3
    {// 4
        name: "Moacir",
        age: 2,
        weight: 4
    }
]

console.log(animals)
// Tamanho do array
console.log(animals.length)
// Mostrando pelo índice
console.log(animals[0])
console.log(animals[2])
console.log(animals[3])
console.log(animals[4])
// Acessando uma propriedade de um objeto dentro de um array
console.log(animals[4].name)
console.log(animals[4].age)
console.log(animals[4].weight)

console.table(animals)
