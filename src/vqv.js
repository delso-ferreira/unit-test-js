/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/
/* ? */
/* const mensagem = 'trabalho na Trybe e mando muito em programação!';
const foguete = '#VQV!';
trybe: mensagem,
hashtag: foguete,
 */  

const vqv = (nome, numero) => {
  const estudante = {
    pessoa: nome,
    idade: numero,    
  };

  if (!nome || !numero) {
    return undefined;
  } 
      return `Oi, meu nome é ${estudante.pessoa}!
Tenho ${estudante.idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
