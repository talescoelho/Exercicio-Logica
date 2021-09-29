const nomeFrutas = require('../exercicio1');
const vitaminaC = require('../exercicio2');
const maisCara = require('../exercicio3');
const frutaPredominante = require('../exercicio4');
const diaDesconto = require('../exercicio5');

describe("Exercício 1 Função nomeFrutas()", () => {
  it("verifica se a função nomeFrutas retorna um array com o nome das frutas", () => {
    expect(nomeFrutas()).toEqual([
      'Maracujá', 'Manga',
      'Laranja',  'Banana',
      'Mamão',    'Maçã',
      'Limão'
    ]);
  });
});

describe("Exercício 2 Função vitaminaC()", () => {
  it("verifica se a função vitaminaC retorna um array com o nome das frutas que contenham a vitamina C", () => {
    expect(vitaminaC()).toEqual([ 'Maracujá', 'Manga', 'Laranja', 'Mamão', 'Maçã', 'Limão' ]);
  });
});

describe("Exercício 3 Função maisCara()", () => {
  it("verifica se a função maisCara retorna os dados da fruta mais cara", () => {
    expect(maisCara()).toEqual({
      id: 1007,
      nome: 'Maçã',
      valorNutritivo: [ 'C' ],
      predominante: [
        'FEV', 'MAR',
        'ABR', 'MAI',
        'JUN', 'JUL',
        'AGO', 'SET'
      ],
      preco: 4.16
    });
  });
});

describe("Exercício 4 Função frutaPredominante()", () => {
  it("verifica se a função frutaPredominante retorna o nome da fruta mais predominante", () => {
    expect(frutaPredominante()).toBe("Mamão");
  });
});

describe("Exercício 5 Função diaDesconto()", () => {
  it("verifica se a função diaDesconto retorna uma lista com o nome das frutas que estão com desconto no dia", () => {
    expect(diaDesconto("seg")).toEqual(["Maracujá", "Laranja", "Maçã"]);
    expect(diaDesconto("ter")).toEqual(["Manga", "Banana", "Limão"]);
  });
});
