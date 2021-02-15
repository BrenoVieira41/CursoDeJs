function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

do  { // Ele so fara a verificação após fazer o primeiro test
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) // Essa e a unica estrutura de controle que a expressão esta depois do bloco

console.log('Até a próxima!')