const verifyStore = require('../exercicio5');
const verifyId = require('../exercicio6');

describe("Exercício 5 Função verifyStore", () => {
  it("verifica se a função verifyStore('KaBuM!', 'keyboards') retorna um array com o nome de todos os teclados da Kabum!", () => {
    expect(verifyStore("KaBuM!", "keyboards")).toEqual([
      'Teclado Logitech K120, ABNT2',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Mecanico Gamer Redragon Daska, Rainbow',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Gamer Trust GXT 835 Azor',
      'Teclado Gamer Multilaser Multimidia USB PRETO/VERDE'
    ]);
  });
  it("verifica se a função verifyStore('Terabyteshop', 'mouses') retorna um array com o nome de todos os mouses da Terabyteshop", () => {
    expect(verifyStore("Terabyteshop", "mouses")).toEqual([
      'Mouse Gamer Cobra Chroma M711 Rgb Redragon',
      'Mouse Gamer Logitech G203 Rgb Lightsync'
    ]);
  });
  it("verifica se a função verifyStore('Americanas', 'headsets') retorna um array com o nome de todos os headsets da Americanas", () => {
    expect(verifyStore("Americanas", "headsets")).toEqual([
      'Headset Headband 3.5 mm Wired',
      'Headphone Microfone Gm-019',
      'Fone Ouvido Sem Fio Bluetooth Lc-840',
      'Headset M2 Cat 2021'
    ]);
  });
  it("verifica se a função verifyStore('Mercado Livre', 'graphicsCard') retorna um array com o nome de todos os graphicsCard da Mercado Livre", () => {
    expect(verifyStore("Mercado Livre", "graphicsCard")).toEqual([]);
  });
});

describe("Exercício 6 Função verifyId", () => {
  it("verifica se a função verifyId('K009') retorna um objeto com os dados do produto", () => {
    expect(verifyId("K009")).toEqual({
      id: 'K009',
      name: 'Teclado Gamer Trust GXT 835 Azor',
      brand: 'Trust',
      color: [ 'black' ],
      bluetooth: false,
      stores: [ 'KaBuM!', 'Americanas', 'Pichau' ],
      prices: [ 149.9, 160.66, 180.99 ]
    });
  });
  it("verifica se a função verifyId('M004') retorna um objeto com os dados do produto", () => {
    expect(verifyId("M004")).toEqual({
      id: "M004",
      name: "Mouse Logitech M170",
      brand: "Logitech",
      dpi: 1.000,
      color: ["black", "white", "red"],
      bluetooth: true,
      buttons: 3,
      stores: ["Shopee", "Kabum!", "Kalunga"],
      prices: [10.10, 69.90, 69.90],
    },);
  });
});
