function Pessoa() {
  this.idade = 0

  setInterval(function() { // Ela despara outra função baseada no intervalo que foi passada
    this.idade++ // aki e oque a função vai fazer 
    console.log(this.idade) // aki a resposta que trazer
  }.bind(this), 1000)  // aki o bind ta trazendo this porem e por que ele esta dentro da função mas ele ta trazendo a pessoa no geral
}

new Pessoa

function Pessoa() {
  this.idade = 0

  const self = this //  de forma bem simples esse codigo faz a mesma coisa porem como self ele ta ainda mais ligado a pessoa
  setInterval(function() { 
    self.idade++ 
    console.log(self.idade) 
  }, 1000)  // não sera necessario passar o bind pois ele ta ligado sempre a pessoa
}

new Pessoa