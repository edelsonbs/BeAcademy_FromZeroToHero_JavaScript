// Exemplo 1

// Method
function myFirstFunction() {
    // Aqui entra meu código
    console.log("Olha a função!")
}

// Execute
myFirstFunction()

// Função co parâmetros e argumentos
// number1 = 32 e number2 = 24
function sum(number1, number2) {
    console.log(number1 + number2)
} 

sum(32, 24)

// Função com retorno (return)
function myFirstFunctionWithReturn(num1, num2) {
    let total = num1 + num2
    return total
}

// -> Total = ??
console.log(myFirstFunctionWithReturn(20, 20))
