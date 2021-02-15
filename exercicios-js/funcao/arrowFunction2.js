function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++ // como e uma função arrow o (this) e uma constante ele não vai variar assim esse codigo fica ainda menor / melhor
    console.log(this.idade)
  }, 1000)
}

new Pessoa