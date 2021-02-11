function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min] // Aki ele ta dizendo que se o minimo for maior do que o maximo ele inverte os dois
  const valor = Math.random() * (max - min) + min 
  return Math.floor(valor)
}

console.log(rand([50, 40])) //dessa forma e passado o maximo e o minimo
console.log(rand([990])) //dessa forma e o minimo
console.log(rand([0, 10])) //dessa forma ele trara o minimo como zero e o maximo como 10
console.log(rand([])) //ele vai navegar entre os valores padroes
