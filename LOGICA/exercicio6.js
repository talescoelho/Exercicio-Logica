const mercado = require('./mercado');

// complete a função buscaPorNome, que ao receber o nome da fruta, retorna um objeto com os dados da fruta
function buscaPorNome(nameFruit) {
  const market = mercado.frutas;
    for (let index = 0; index < market.length; index += 1) {
    if (market[index].nome === nameFruit) {
    return market[index];
    }
  }
  return undefined
}
  console.log(buscaPorNome('Manga'))
module.exports = buscaPorNome;
