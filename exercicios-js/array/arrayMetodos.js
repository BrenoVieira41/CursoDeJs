const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo index do array
console.log(pilotos)

pilotos.shift() //Remove o primeiro index do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Criar um novo Array na primeira posição
console.log(pilotos)

pilotos.push('Verstappen') //Criar um novo Array na ultima posição
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Trata os indices
console.log(pilotos)

pilotos.splice(3, 1) //
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Seleciona uma parte do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Ele pega o Primeiro e iguinora o ultimo
console.log(algunsPilotos2)