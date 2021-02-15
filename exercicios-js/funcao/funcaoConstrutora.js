function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0 

  //metodo publico
  this.acelerar = function () { // se quer que algo seja publico basta utilizar o codigo (this)
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  } // a cada vez que essa função for chamada ela aumentara a velocidade 

  //metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}

// se tiver passando os parametros de outra função não e necessario utilizar os parenteses ()
const uno = new Carro // new e utilizado para criar uma novo "carro" 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferraro = new Carro (350, 20)
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

