const mercado = require('./mercado');

// complete a função buscaValorNutritivo, que ao receber um valor nutritivo como parametro,
// retorna um array com o nome de todas as frutas que possui esse valor nutritivo
function buscaValorNutritivo(vitamina) {
  const market = mercado.frutas;
  const arrayFruits = [];
  for (let i = 0; i < market.length; i += 1) {
    let fruits = market[i]['valorNutritivo'];
    if (fruits.includes(vitamina)) {
    arrayFruits.push(market[i]['nome']);
    }
  }
  return arrayFruits;
}

module.exports = buscaValorNutritivo;
