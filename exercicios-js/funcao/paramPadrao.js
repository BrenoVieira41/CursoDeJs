// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1  // como o valor e passado depois de cada uma dessas letrar (a, b, c) ele pergunta se
  b = b || 1  // o valor que foi passado ao todo = ao valor dela si sim ela trara ela como resposta 
  c = c || 1 // se não ela trara o numero 1 como resposta 
  return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
/**
 *  Na primeira ele ta levando nullo pras 3 então ele tras a resposta 1 pra cada
 *  Na segunda ele tras 3 pra primeira e 1 pra cada dando 5
 *  Na terceira ele tras a contagem correta 1 + 2 + 3
 *  Na quarta ele passa nulo pra cada então como nulo ele faz a chamada como 1 pra cada como assim js ?
 */

 function soma2(a, b, c) {
   a = a !== undefined ? a : 1 // aki e dito que (si a for diferente de (undefined)) ele trara a como resposta se for igual a undefined ele trara (1)
   b = 1 in arguments ? b : 1 // ele confere se existe um segundo argumento = (b) si existir ele pega o (b) se não ele trara 1(1)
   c = isNaN(c) ? 1 : c // aki e perguntado se o (c) não e um numero se não for ele trara 1 porem se for ele trara o (c)

   return a + b + c
  }

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// nova forma e bem mais simples
function soma3(a = 1, b = 1, c = 1) { // agora e passado diretamente o numero padrão dele aidna no parametro acelerando bastante o processo
  return a + b + c
}
console.log(soma3(), soma3(3), soma3(2, 2, 3), soma3(0, 0, 0))