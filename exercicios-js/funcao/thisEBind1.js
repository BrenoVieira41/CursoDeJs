const pessoa = {
  saudacao : 'Bom dia',
  falar() {
    console.log(this.saudacao) //aki ele ta acessando o atributo do objeto com o this
  } //se retirar o this ele para de chamar
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e POO

// como resolver
const falarDePessoa = pessoa.falar.bind(pessoa) //no bind e passado um objeto que resolvera o this que no caso e a (constante pessoa)
falarDePessoa()