// diferente do for o forIn utiliza diretamente o index dos arrays para facilitar ainda mais o processo
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // aki ja esta recebendo o indice da constante
  console.log(i, '-', notas[i]) // como ta recebendo o index tem que passar em formato de array ([]) 
}

// da mesma forma que e possivel pegar o indice de um array tambem e possivel pegar o indice de um objeto

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64
}

for(let atributo in pessoa) { // o (atributo) seria uma variavel  o (in) a chamada de ... (pessoa) o que o (in) esta chamando
  console.log(`${atributo} = ${pessoa[atributo]}`) // passa pra variavel atributo a pessoa com seus atributos
}