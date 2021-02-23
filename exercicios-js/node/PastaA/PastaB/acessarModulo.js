const moduloA = require('../../moduloA') // Quando e utilzado (..) ele diz que tem que buscar na pasta mãe
console.log(moduloA.ola)

const saudacao = require('saudacao') // Quando esta dentro do modules não sera necessario passar o local relativo
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia') //aki pede pra que ele escreva uma mensagem
  res.end() // aki finaliza oque ta sendo mandado
}).listen(8080)