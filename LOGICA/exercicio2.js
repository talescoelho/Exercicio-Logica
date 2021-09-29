const mercado = require("./mercado");

// escreva a função vitaminaC retornar um array com o nome de todas as frutas que contenham a vitamina C;
function vitaminaC() {
  const arr = [];

  for (let i = 0; i < mercado.frutas.length; i += 1) {
    mercado.frutas[i].valorNutritivo.includes("C") &&
      arr.push(mercado.frutas[i].nome);
  }
  return arr;
}

console.log(vitaminaC());

module.exports = vitaminaC;
