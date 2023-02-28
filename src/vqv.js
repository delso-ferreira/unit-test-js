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

const arrayDePessoas = [
{
 pessoa1: {    
  nome: 'Tunico',
  idade: 29,
  trybe: mensagem,
  vamos: foguete,
 },

 pessoa2: {
  nome: 'Alberto',
  idade: 29,
  trybe: mensagem,
  vamos: foguete,
},

 pessoa3: {
  nome: 'Hamaji',
  idade: 29,
  trybe: mensagem,
  vamos: foguete,
},
}];

// eslint-disable-next-line max-len
const mensagemTrybe = `Oi, meu nome é ${Object.keys(arrayDePessoas)}!\nTenho ${pessoa.idade.object.keys} anos,\n${pessoa.mensagem}\n${pessoa.foguete}`;

const vqv = () => 

    mensagemTrybe;
vqv();

module.exports = vqv;
