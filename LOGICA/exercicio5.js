const mercado = require("./mercado");

// complete a função diaDesconto, que ao receber o dia da semana ("seg", "ter", etc..),
// retorna uma lista com o nome das frutas que estão com desconto neste dia;
function diaDescontos(day) {
const descontoDay = mercado.descontoSemana[day];
const market = mercado.frutas;
let frutaDesconto = [];
for (let i = 0; i < market.length; i+=1) {
if (descontoDay.includes(market[i]['id'])) {
  frutaDesconto.push(market[i]['nome']);
}
}
return frutaDesconto;
}
console.log(diaDescontos('ter'));
module.exports = diaDescontos;
