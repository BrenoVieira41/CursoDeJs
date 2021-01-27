/** 
 * Quando e criado um objeto ele tem uma chave que seria a expecificação e logo apos o valor 
*/

//Fora
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto'] = 0.40

console.log(prod1)

//Dentro
const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90
}
console.log(prod2)