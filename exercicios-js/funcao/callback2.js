// Esse serve para mostrar duas abordagens da mesma ideia 
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) { //aki ele pega o array de notas
  if (notas[i] < 7) { // e informa que so quer as a baixo de 7
    notasBaixas1.push(notas[i]) // pra adicionar um elemento no array e utilizado a função push
  }
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {// e uma função que vai filtar as funções do array baseada em um criterio que sera passado
  return nota < 7  //(se for true então ele adicionara ao array) e (si for falso ele não vai inserir dentro do array) o array notas ira continuar exatamente igual
})
console.log(notasBaixas2)

// Com callback e arrow function

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)