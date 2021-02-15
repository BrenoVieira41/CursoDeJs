const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

// Como retornar um aray apenas com os preços
const paraObjeto = json => JSON.parse(json) // Converte um texto para objeto
const apenasPreco = produto => produto.preco // aki ele pega o parametro que ele ta procurando

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)