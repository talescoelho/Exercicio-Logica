const verifyStore = require('../exercicio5');

describe("Exercício 5 Função nomeFrutas()", () => {
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
