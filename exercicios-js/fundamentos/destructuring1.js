// novo recurso do ES2015

const pessoa = {
  nome: 'Breno',
  idade: 20,
  endereco: {
    logradouro: 'Rua Abc',
    numero: 1000
  }
}

const { nome, idade } = pessoa //dessa forma vai pegar da tabela pessoa o nome e a idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // dessa forma sera pega as informações e depois atribuido novos nomes pras mesmas
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa // Como e passado duas informações que não existem na constante então deveria vir como undefined porem e possivel passar uma informação com o (=)
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep }} = pessoa // dessa forma ele vai pegar a informação dentro de outra informação
console.log(logradouro, numero, cep)

// Se tentar pegar a informação em cascata vai dar alguns problemas
