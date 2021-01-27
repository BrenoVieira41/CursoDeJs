/**
 * Oque e uma função e um ação que executa uma sentença de codigos
 *  Que pode e sera usado novamente onde preferir
 */

 //Funcao sem retorno
 function imprimirSoma(a, b) {
   console.log( a + b )
 }

imprimirSoma(2, 3) //Assim ele vai caucular 
imprimirSoma(2) //Assim não 
imprimirSoma(2, 3, 4, 5, 6) //Ele vai pegar os dois primeiro e vai cagar pro resto

//Funcao com retorno
/**
 * Se baseando que ele usara o b "padrão" assim ele trara ate mesmo apenas o A
 */
function soma(a, b = 0) {
  return a + b
}

console.log(soma( 2, 3 ))
console.log(soma(2))