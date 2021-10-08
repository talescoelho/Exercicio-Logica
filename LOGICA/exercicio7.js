const mercado = require('./mercado');

// complete a função maisBarata para retornar os dados da fruta mais barata;
function maisBarata() {
  const market = mercado.frutas;
  let counter = market[0].preco;
  let frutaBarata;
  for (let index = 0; index < market.length; index += 1) {
    if (counter > market[index].preco) {
      counter = market[index].preco;
      frutaBarata = market[index];
    }
  }
return frutaBarata;
}
console.log(maisBarata());

module.exports = maisBarata;
