const nomeFrutas = require('../exercicio1');
const vitaminaC = require('../exercicio2');
const maisCara = require('../exercicio3');
const frutaPredominante = require('../exercicio4');
const diaDescontos = require('../exercicio5');
const buscaPorNome = require('../exercicio6');
const maisBarata = require('../exercicio7');
const buscaValorNutritivo = require('../exercicio8');
const buscaPorMesPredominante = require('../exercicio9');

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

describe("Exercício 5 Função diaDescontos()", () => {
  it("verifica se a função diaDescontos retorna uma lista com o nome das frutas que estão com desconto no dia", () => {
    expect(diaDescontos("seg")).toEqual(["Maracujá", "Laranja", "Maçã"]);
    expect(diaDescontos("ter")).toEqual(["Manga", "Banana", "Limão"]);
  });
});

describe("Exercício 6 Função buscaPorNome()", () => {
  it("verifica se a função buscaPorNome retorna uma lista com o nome das frutas que estão com desconto no dia", () => {
    expect(buscaPorNome("Mamão")).toEqual({
      id: 1006,
      nome: "Mamão",
      valorNutritivo: ["A", "C"],
      predominante: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "SET", "OUT", "NOV", "DEZ"],
      preco: 1.94,
    });
    expect(buscaPorNome("Limão")).toEqual({
      id: 1008,
      nome: "Limão",
      valorNutritivo: ["C"],
      predominante: ["JAN", "AGO", "SET", "OUT", "NOV", "DEZ"],
      preco: 2.50,
    });
  });
});

describe("Exercício 7 Função maisBarata()", () => {
  it("verifica se a função maisBarata retorna os dados da fruta mais barata", () => {
    expect(maisBarata()).toEqual({
      id: 1006,
      nome: "Mamão",
      valorNutritivo: ["A", "C"],
      predominante: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "SET", "OUT", "NOV", "DEZ"],
      preco: 1.94,
    });
  });
});

describe("Exercício 8 Função buscaValorNutritivo()", () => {
  it("verifica se a função buscaValorNutritivo retorna uma lista com o nome das frutas que tem o valor nutritivo informado", () => {
    expect(buscaValorNutritivo("C")).toEqual(["Maracujá", "Manga", "Laranja", "Mamão", "Maçã", "Limão"]);
    expect(buscaValorNutritivo("B")).toEqual(["Manga", "Laranja"]);
  });
});

describe("Exercício 9 Função buscaPorMesPredominante()", () => {
  it("verifica se a função buscaPorMesPredominante recebe o mes como valor e retorna uma lista com todos os nomes das frutas que esse mês aparece no campo predominante", () => {
    expect(buscaPorMesPredominante("JAN")).toEqual(["Maracujá", "Manga", "Banana", "Mamão", "Limão"]);
    expect(buscaPorMesPredominante("MAI")).toEqual(["Maracujá", "Laranja", "Mamão", "Maçã"]);
  });
});
