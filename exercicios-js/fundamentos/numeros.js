const peso1 = 1.0 //flooat
const peso2 = Number('2.0') //flooat forçado

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
// Se o numero flooat for = a 1.0, 2.0 ... ele sera contado como inteiro porem se tiver algum numero depois da virgula não sera.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) //fixa em no maximo duas casas após o ponto]
console.log(media.toString(2)) // Converte o float em binario
console.log(typeof media) 

// Number: Função 
// number: Type