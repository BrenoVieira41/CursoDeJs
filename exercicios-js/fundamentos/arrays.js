const valores = [7.7, 8.9, 6.3, 9.2] //Array se baseia em uma variavel ou constante com multiplos valores separados por virgula
console.log(valores[0], valores[3]) //Essa e a forma de chamada indexada onde ele vai trazer sa informações expecificas que nele foi passado trata o primeiro e  ultimo 
console.log(valores[4]) //Indice quatro não existe nesse caso porem ele trara (undefined)

valores[4] = 10
console.log(valores)
console.log(valores.length)// Faz a contagem de quantos elementos tem no array

valores.push({id: 3}, false, null, 'test') // Inseri novos valores
console.log(valores)

console.log(valores.pop()) //Ele retira o ultimo inserido do array
delete valores[0] //Vai retirar o valor escolhido

console.log(typeof valores)

valores[10] = 10
console.log(valores) // Como so existem indices de 0 a 3 ele criara 6 indices vazios no meio 
