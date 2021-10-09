const mercado = require('./mercado');

// complete a função "vitaminaC",
// para retornar um array com o nome de todas as frutas que contenham a vitamina C;
function vitaminaC() {
  const market = mercado.frutas;
  const arrayFruitsC = [];
  for (let i = 0; i < market.length; i += 1) {
    let fruitsC = market[i]['valorNutritivo'];
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    if (fruitsC.includes('C')) {
      arrayFruitsC.push(market[i]['nome']);
    }
  }
  return arrayFruitsC;
}
console.log(vitaminaC());

module.exports = vitaminaC;
