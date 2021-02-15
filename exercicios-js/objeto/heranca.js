const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.__proto__) // esse codigo estranho e a procura do codigo pelo codigo (pai)
console.log(ferrari.__proto__ === Object.prototype) 
