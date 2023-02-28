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
const mensagem = 'trabalho na Trybe e mando muito em programação!';
const foguete = '#VQV!';



const pessoa1 = {    
  nome: 'Tunico',
  idade: 29,
  trybe: mensagem,
  vamos: foguete,
 };

 const pessoa2 = {
  nome: 'Alberto',
  idade: 29,
  trybe: mensagem,
  vamos: foguete,
};

 const pessoa3 = {
  nome: 'Hamaji',
  idade: 29,
  trybe: mensagem,
  vamos: foguete,
};

const mensagemTrybe = `Oi, meu nome é ${pessoa1.nome}!
Tenho ${pessoa1.idade} 
anos,${pessoa1.trybe}
${pessoa1.vamos}`;

const vqv = () => 

    mensagemTrybe;
vqv();

module.exports = vqv;
