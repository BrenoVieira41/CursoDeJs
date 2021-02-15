const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) { // aki ele chamara as informações do array sendo da esquerda o nome e da direita o indice então o nome não importa
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // para cada elemento que for encontrado dentro do array ele vai chamar de volta
fabricantes.forEach(fabricante => console.log(fabricante))