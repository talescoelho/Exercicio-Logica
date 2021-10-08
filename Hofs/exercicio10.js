const produtos = require('./produtos');

/*
  Nesta função você vai precisar receber 2 parâmetros, sendo o primeiro o tipo do item, o segundo vai ser o id do item
  e retornar um objeto com o seguinte formato:
  priceProductForStore("mouses", "M001")
  {
      id: "M001",
      name: "Mouse Gamer Cobra Chroma M711 Rgb Redragon",
      brand: "Redragon",
      dpi: 10.000,
      color: ["black", "white"],
      bluetooth: false,
      buttons: 8,
      priceProductForStore: {"KaBuM!": 114.90, Terabyteshop: 116.90, Pichau: 129.90},
    },
  onde você irá substituir as chaves "stores" e "prices" para a chave "priceProductForStore" onde la vai ser um
  objeto com a chave sendo o nome da loja e o valor sendo o preço 
  (leve em consideração que o nome da loja e o preço se relacionam pelo mesmo index)
  stores: ["KaBuM!", "Terabyteshop", "Pichau"],
  prices: [114.90, 116.90, 129.90],
  vai ficar
  priceProductForStore: {"KaBuM!": 114.90, Terabyteshop: 116.90, Pichau: 129.90},
*/
function priceProductForStore() {
  
}

module.exports = priceProductForStore;
