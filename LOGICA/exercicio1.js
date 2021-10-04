const mercado = require('./mercado');

// complete a função "nomeFrutas", para retornar um array com o nome de todas as frutas da constante mercado;
function nomeFrutas() {
  const arrayFrutas = []
  const allFruits = mercado.frutas
  for (let index = 0; index < allFruits.length; index += 1) {
    let fruits = allFruits[index]['nome']
    arrayFrutas.push(fruits)
  }
  return arrayFrutas
}
console.log(nomeFrutas());

module.exports = nomeFrutas;
