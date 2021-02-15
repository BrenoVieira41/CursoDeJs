// const pessoa = {
//   nome: 'Rebeca',
//   idade: 2,
//   peso: 13
// }

// console.log(Object.keys(pessoa)) // tras os campos do objeto
// console.log(Object.values(pessoa)) // tras os dados do objeto
// console.log(Object.entries(pessoa)) // tras campos e os dados em array separados

// Object.entries(pessoa).forEach(([chave, valor]) => {
//   console.log(`${chave}: ${valor}`)
// })

// Object.defineProperty(pessoa, 'dataNascimento', { // Tras a possibilidade de criar um novo objeto utilizando uma função
//   enumerable: true, //diz se pode ser listada
//   writable: false, // pergunta se pode ser modificada
//   value: '01/01/2019' // o valor do campo
// })

// console.log(pessoa)

// Object.assign
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Ele uni com outros objetos sendo que se existir o mesmo atributo ele vai utilizar o ultimo que foi passado

// Object.freeze(obj) // Ele impede que altere o objeto
// obj.c = 1234
console.log(obj)