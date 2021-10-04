const mercado = require("./mercado");

// complete a função buscaPorPredominante, que ao receber o mes como valor,
// retorna uma lista com todos os nomes das frutas que esse mês aparece no campo predominante
function buscaPorMesPredominante(mes) {
  const market = mercado.frutas;
  let frutasNoMes = [];
  for (let i = 0; i < market.length; i+=1) {
    if(market[i].predominante.includes(mes)) {
    frutasNoMes.push(market[i]['nome']);
    }
  }
  return frutasNoMes;
}
  console.log(buscaPorMesPredominante('JUL'));
module.exports = buscaPorMesPredominante;
