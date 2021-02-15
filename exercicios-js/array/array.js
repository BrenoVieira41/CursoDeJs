// array em js e um objeto só que no lugar de gerenciar por chaves ele gerencia em indice começando com o indice 0

let aprovados = new Array('Malena', 'Calos', 'Ana')
console.log(aprovados)

// Forma mais correta
aprovados = ['Malena', 'Carlito', 'Ana']
console.log(aprovados[0]) // Quando e passado o index ele chama na ordem crescente iniciando pelo 0 
console.log(aprovados[1]) 
console.log(aprovados[2]) 
console.log(aprovados[3]) // nesse exemplo não existe o (quarto) item então ele trara (undefined)

// Formas de adicionar mais um campo no array
aprovados[3] = 'Paulo' // Forma mais usada para subistituir um array existente / ou inserir em um index especifico
aprovados.push('Carlos') // Forma mais comum de adicionar codigos a um array (push ele cria um novo index)
console.log(aprovados.length)

aprovados[9] = 'Rafael' // Quando e passado um index pulando na ordem ele e criado e todos que foram pulados tambem são criados porem como (undefined)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Ordenar no formato alfabetico
console.log(aprovados.sort)

delete aprovados[1] //Ele deletara a informação do array porém vai deixar o index 
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Malena', 'Carlito', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2' ) // o primeiro parametro fala de qual vamos tratar e o segundo de quantos vamos tirar e oque vir depois e oque vamos adicionar
console.log(aprovados)
