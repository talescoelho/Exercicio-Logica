const mercado = require('./mercado');

// complete a função buscaValorNutritivo, que ao receber um valor nutritivo como parametro,
// retorna um array com o nome de todas as frutas que possui esse valor nutritivo
function buscaValorNutritivo(vitamina) {
    const market = mercado.frutas;
    const arrayFruits = [];
    for (let i = 0; i < market.length; i += 1) {
      let fruits = market[i]['valorNutritivo'];
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
      if (fruits.includes(vitamina)) {
        arrayFruits.push(market[i]['nome']);
      }
    }
    return arrayFruits;
}
console.log(buscaValorNutritivo('B'));
module.exports = buscaValorNutritivo;
