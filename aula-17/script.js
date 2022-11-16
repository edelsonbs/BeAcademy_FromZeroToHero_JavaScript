/* Throw and Try Catch */

// Saber a minha idade
function myAge(myage) {
    if (!myage) {
        throw 'Você precisa colocar a idade'
    }

    console.log('Eu executei depois do erro!')
}

try {
    myAge(30)
    console.log('Já tratei e deu certo')
} catch(error) {
    console.log(error)
}

console.log('O programa continua...')
