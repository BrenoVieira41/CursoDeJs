// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // Nesse caso a função de uma linha /que não tem chaves ele ja tras um retorno util
console.log(subtracao(2, 3))