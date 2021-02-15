const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { // Assim como as demais ela tambem pode receber 3 parametros e mapeia os mesmos
  return e * 2 // logo depois de mapear o array ele pode passar uma função assim alterando o array
})

console.log(resultado) // por sinal ele não altera o original ele gera um novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
// parseFlooat(e) = passar para flooat os dados
// toFixed(2) = numero de casas maxima apos o "ponto"
// replace('.', ',') = altrar o valor de um ponto para uma virgula

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // e possivel passar mais de um map por vez pois ele cria outro array
console.log(resultado)