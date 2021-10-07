const produtos = require('./produtos');

/*
Neste exercício você vai precisar retornar um objeto que tem as seguintes características:
{
  NOME_LOJA_1: {
    mouses: [NOME_DOS_MOUSES_QUE_EXISTEM_NA_LOJA_1],
    keyboards: [NOME_DOS_TECLADOS_QUE_EXISTEM_NA_LOJA_1],
    headsets: [NOME_DOS_HEADSETS_QUE_EXISTEM_NA_LOJA_1],
    graphicsCard: [NOME_DAS_PLACAS_DE_VÍDEO_QUE_EXISTEM_NA_LOJA_1]
  },
  NOME_LOJA_2: {
    mouses: [NOME_DOS_MOUSES_QUE_EXISTEM_NA_LOJA_2],
    keyboards: [NOME_DOS_TECLADOS_QUE_EXISTEM_NA_LOJA_2],
    headsets: [NOME_DOS_HEADSETS_QUE_EXISTEM_NA_LOJA_2],
    graphicsCard: [NOME_DAS_PLACAS_DE_VÍDEO_QUE_EXISTEM_NA_LOJA_2]
  }
  ...
  NOME_LOJA_N: {
    mouses: [NOME_DOS_MOUSES_QUE_EXISTEM_NA_LOJA_N],
    keyboards: [NOME_DOS_TECLADOS_QUE_EXISTEM_NA_LOJA_N],
    headsets: [NOME_DOS_HEADSETS_QUE_EXISTEM_NA_LOJA_N],
    graphicsCard: [NOME_DAS_PLACAS_DE_VÍDEO_QUE_EXISTEM_NA_LOJA_N]
  }
}
Onde teremos um objeto que sua chave é o nome da loja, seu valor é outro objeto com os produtos e o valor
é um array contendo o nome de cada produto.

esta função pode receber até 3 parâmetros

O primeiro parâmetro é o nome da loja, se for informado o nome da loja a função deve retornar somente 
o objeto da loja informada
createStore(store = "AliExpress")
retorna
{
  mouses: [],
  keyboards: [],
  headsets: [ 'Headset Headband 3.5 mm Wired' ],
  graphicsCard: []
}
se a loja não existir ou o parâmetro não for passado retornar todos os objetos

O segundo parâmetro (só pode ser passado se o primeiro parâmetro for inserido) deve retornar o array com a lista 
de produtos passados no parâmetro
createStore("Terabyteshop", "headsets")
[
  'Headset Gamer Hyperx Cloud Stinger Core',
  'Headset Gamer Scylla Redragon H901',
  'Headset Headband 3.5 mm Wired'
]
se não existir retornar a loja com todos os produtos

:D Bom fim de semana e feriado!!!
*/
function createStore() {
  
}

module.exports = createStore;
