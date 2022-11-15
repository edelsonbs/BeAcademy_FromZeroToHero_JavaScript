/* Type Conversion */

// Convertendo String para número e número para String
console.log(Number('9')+24)
console.log(typeof String(9) + ' Converteu diacho')

// Contar caracteres
let oneWord = "Moacir" // 6 letras
console.log(oneWord.length)

// Maiúsculas e Minúsculas
let phrase = "Olha o bonde da PayLivre uaaaaauuuuu"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

// Convertendo para Inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

// Convertendo para Decimal
let integerNumber = 24
console.log(parseInt(integerNumber))

// Trabalhar com casas decimais, números depois da vírgula 
let niceNumber = 24.9888342325443
console.log(niceNumber.toFixed(4))
console.log(niceNumber.toFixed(4).replace('.',','))

// Precisão numérica
let otherNumber = 129/32
console.log(typeof Number(otherNumber.toPrecision()))