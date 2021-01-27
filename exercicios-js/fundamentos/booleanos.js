let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!false) //Trara false

isAtivo = 1 
console.log(!false) //Trara True


// Logica De (OU)
let nome1 = ''
console.log(nome1 || 'Desconhecido') // Como o nome não existe ele trara o OU que seria desconhecido

let nome2 = 'Luska'
console.log(nome2 || 'Desconhecido') // Como o nome existe ele trara o nome original