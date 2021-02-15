/** Sobre o forEach 
 *  Ele sempre passa o nome no primeiro parametro, indice no segundo e array no terceiro
 *  Si passar somente um ele trara somente o nome
 *  Si quiser passar somente o indice ... vai ter que passar o parametro tambem 
 */
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) { // O forEach vai percorrer o array... enquanto a função vai chamar de volta (callback) o nome e o (index) do mesmo
  console.log(`${indice + 1}) ${nome}`)
  console.log(array)
})


// Utilizando o arrow function
aprovados.forEach(nome => console.log(nome))

// Utilizando constante com arrow function
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)