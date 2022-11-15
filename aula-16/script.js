/* IF and ELSE (Se e Senão) */

let num = 10
let num2 = 20
let isAdmin = true

// > < == === != !==
// && (AND)  || (OR)  ! (NOT)
if (num > 5) {
    console.log('Sou maior que 5')
} else {
    console.log('Não sou maior que 5')
}

if (num >= 10 && num2 <= 10) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (!isAdmin) {
    console.log('Ele não é admin')
} else {
    console.log('Ele é admin, tem permissão')
}

if (isAdmin) {
    console.log('Ele é admin, tem permissão')
} else {
    console.log('Ele não é admin')
}
// if...else if
if (num < 10) {
    console.log('Sou maior')
} else if (num < 10 && num2 == 20) {
    console.log('Segunda resposta verade')
} else {
    console.log('Resposta falsa')
}

/* Switch */

let myExpression = 'c'

switch (myExpression) {
    case 'a':
        console.log('Apertou o A')
        break
    case 'b':
        console.log('Apertou o B')
        break
    case 'c':
        console.log('Apertou o C')
        break
    default:
        console.log('Você apertou outra tecla', myExpression)
}

// Calculadora
function calc (num1, operator, num2) {
    let result

    switch (operator) {
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
        default:
            console.log('Não entendi')
            break    
    }
    return result
}

console.log(calc(4,'*',4))
console.log(calc(8,'/',2))
console.log(calc(12,'+',12))
console.log(calc(12,'%',12))