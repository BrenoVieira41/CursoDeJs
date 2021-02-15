function test1(num) {
  if(num > 7)// O java script ele consegue criar coisas sem a chaves porem ele trara apenas uma linha de codigo sendo assim ele trara apenas o num
    console.log(num)
    console.log('Final')
 
}

test1(6)
// Aki ele vai emprimir o (final) pois ele esta fora do codigo unico aceito pelo vs 
//code quando não a chaves porém ele vai imprimir o (final) como ele ta solvo e depois vai imprimir
// o numero 8 e pra finalizar fai imprimir o (final) novamente
test1(8)

function test2(num) {
  if(num > 7); { // aki ele trara ambas as respostas pois o if ta trazendo o ponto e virgula então o console log ta em outro canto na logica
    console.log(num) 
  }
}
// Cuidado com o ';', não utilizar com as estruturas de controle
// Se tirar o ponto e virgula trara somente o oito
test2(6)
test2(8)