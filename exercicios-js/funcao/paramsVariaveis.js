function soma() {
  let soma = 0
  for (i in arguments) { // arguments e um array interno de uma função que possui todos os argumentos que foram passados
    soma += arguments[i]
  }
  return soma
}

console.log(soma()) //não trara nada
console.log(soma(1)) // trara 1
console.log(soma(1.1, 2.2, 3.3)) // trara 6.6
console.log(soma(1.1, 2.2, "teste")) // trara 3.30 e logo apos trara o texto tambem
console.log(soma('a', 'b', 'c')) // trara primeiro o 0 que foi o numero passado na variavel logo apos trara o abc
