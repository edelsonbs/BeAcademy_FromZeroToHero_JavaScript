/* Tipo String */
console.log('Olha eu no aspas simples!!')
// Usando aspas simples dentro de aspas duplas
console.log("Olha eu no 'aspas' simples!!")
// Usando tamplate literals
console.log(`Ol'ha 'eu' 'no'
 "aspas" 
'simples'!!`)

/* Tipo Number */
console.log(12) // Integer
console.log(24.5) // Float
console.log(12*24/4) // cálculo
console.log(Infinity)
console.log(50+(53*4.5))
console.log(Math.round(50+(53*4.5)))

/* Tipo Boolean */
console.log(24 > 42)
console.log(42 > 32)
console.log(42 == 32)

/* null e undefined */
console.log(null === undefined)

/* Tipo Objeto */
console.log({
    marca: 'FIAT',
    largura: '550cm',
    peso: 1,
    velocidade: (90 * 200) * 2,
    andar: function () {
        console.log(`Sua velocidade é de 200`)
    },
    possuiAr: true
})

/* Tipo Array */
console.log([
    "Bolacha", // 0
    "Coca-cola", // 1
    "Verduras", // 2
    "Água" // 3
])
