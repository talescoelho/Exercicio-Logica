const produtos = require('./produtos');

// complete a função para receber um número como parametro e 
// retornar o nome de todos os produtos que tenham a diferença entre
// o preço máximo e o preço mínimo maior que o número informado
// caso não exista, retornar um array vazio
function differenceBetweenMaxAndMinPrice(num) {
  const arr = Object.values(produtos)
  const newObj = [...arr[0], ...arr[1], ...arr[2], ...arr[3]].filter(({ prices }) => Math.max(...prices) - Math.min(...prices) > num);
  return newObj.map(({ name }) => name);
} 

console.log(
  differenceBetweenMaxAndMinPrice(300)
)

module.exports = differenceBetweenMaxAndMinPrice;
