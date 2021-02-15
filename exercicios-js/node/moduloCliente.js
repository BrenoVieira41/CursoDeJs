const moduloA = require('./moduloA') // Ele importa com uma requisição direta no local
const moduloB = require('./moduloB') // Utilizando o arquivo relativo

// (.) e o mesmo arquivo
// (..) e o arquivo anterior

// Então agora e possivel chamar o modulo que foi importado
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)