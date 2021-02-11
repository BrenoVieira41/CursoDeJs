// O hoisting se baseia em como o js trata as informações o codigo que seria assim
console.log('a =', a)
var a = 2
console.log('a =', a)

//seria a mesma coisa que isso aki
var a 
console.log('a =', a)
a = 2
console.log('a =', a)

// Dentro duma funcion aconteceria a mesma coisa tambem

function teste() {
  console.log('a =', a)
  var a = 2
  console.log('a =', a)
}