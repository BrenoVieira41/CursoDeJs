Array.prototype.forEach2 = function(callback) { // aki e criado uma nova versão do forEach
  for (let i = 0; i < this.length; i++) { //aki e passada a função do forEach
    callback(this[i], i, this) // e aki os parametros do forEach
  }

}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})