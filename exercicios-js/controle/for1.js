// A repetição se baseia em :
/** 
 * 1- Declaração de uma variavel
 * 2- Expressão = informa ate onde vai continuar no laço
 * 3- Incremento/Decremento = O que vai tentar fechar o laço
 */

let contador = 1 // 1
while(contador <= 10) { // 2
  console.log(`contador = ${contador}`)
  contador++ // 3
}

for(let i = 1; i <= 10; i++){ // ate o primeiro (;) = 1| ate o segundo (;) = 2| ate o ultimo (;)
  console.log(`contador2 = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // aki esta passando os dados
//aki esta dizendo que cada um dos dados vai ser numerado 
//e o (i) vai começar do zero que na logica da programação sera o primeiro
// e então vai aumentando de 1 em 1 para trazer todos os dados
for(let i = 0; i < notas.length; i++) { 
  console.log(`nota = ${notas[i]}`) // Essa e a forma mais facil e conhecida de navegar num array
}
