const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Malena' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { // aki ele cria o objeto uma propriedade e uma descrição
  value: function() { return Object.value(this) }, // aki e passado o valor com o this
  enumerable: false
})

console.log(quaseArray[0])