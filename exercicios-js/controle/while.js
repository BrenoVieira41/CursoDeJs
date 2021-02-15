// O while se baseia em repetições onde voce não sabe o numero de vezes em media que ele sera chamado
// exemplo: enquanto o pedrinho não chegar no topo do predio o codigo vai contar os andares

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0
let contagem = 1

while (opcao != -1) { // Com o while e criado um laço de repetição assim como e no if ele pede um verdadeiro para informação então enquanto for verdadeiro 
  opcao = getInteiroAleatorioEntre(-1, 10) //então dentro do laço tem que acontecer algo que fique falso se não ele trara informações para sempre
  console.log(`${contagem++}-Opção escolhido foi ${opcao}.` ) // aki ele vai retornar o numero de vezes e o numero que foi mandado
}

console.log('Até a próxima!')