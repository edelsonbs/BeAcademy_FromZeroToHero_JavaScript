## Teoria do prato de comida

Vou montar meu prato de comida para lmoçar

function almocar(comida1, comida2, comida3) {
    return `Meu almoço teve ${comida1}, ${comida2}, ${comida3}`
}

// Preciso de um prato para armazenar a comida
const prato = almocar('arroz','feijão','frango')

console.log(prato)

## Arrow Function, maneira mais moderna de criar uma função

### Exemplo

const arrowFunction = () => {
    console.log('Arrow Function')
}

arrowFunction()

### Exemplo com parâmetros e retorno

const arrowFunction = (num1, num2) => {
    total = num1 + num2
    return total
}

const result = arrowFunction(90,20)
console.log(result)
