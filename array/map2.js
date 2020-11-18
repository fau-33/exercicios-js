const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 19.40}',
  '{"nome": "Kit de Lápis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'

]

//Retonar arrays como os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)