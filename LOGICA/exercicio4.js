const mercado = require('./mercado');

// complete a função frutaPredominante
// para retornar o nome da fruta que possui o maior número de meses predominantes; 
function frutaPredominante() {
  const market = mercado.frutas
  let count = 0
  let frutaMadura = '';
  for(let index = 0; index < market.length; index += 1){
    const frutaLength = market[index]['predominante']
    if (count < frutaLength.length){
      count = frutaLength.length
      frutaMadura = market[index]['nome'];
    }
  }
  return frutaMadura
}

console.log(frutaPredominante());
module.exports = frutaPredominante;
