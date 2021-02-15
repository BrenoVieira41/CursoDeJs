let dobro = function (a) {
  return 2 * a
}

/** Sobre a arrow function
 * ela e uma função anonima então vai ter que estar semrpe dentro de outra função ou variavel
 * se tiver so um parametro não e necessario utilizar parenteses ()
 * como quando e tirado a chaves ele puxa o primeiro codigo a arrow function não vai precisar de um return ficando ainda menor
 * na arrow function o (this) e uma constante isso quer dizer que ele não muda
 */

dobro = (a) => { // arrow function padrão 
  return 2 * a
}

dobro = a => 2 * a // arrow com return implicito
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

// parametros {
ola = () => 'Olá' // aqui e parametro vazio
ola = _ => 'Olá' // aqui ele existe parametro porem pode ser iguinorado
//}
console.log(ola())