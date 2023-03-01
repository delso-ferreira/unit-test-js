/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }

  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 3, 2, 0, -1 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]
*/

const calculator = (numberinteiro1, numberinteiro2) => ({
    sum: Math.round(numberinteiro1 + numberinteiro2),
    mult: Math.round(numberinteiro1 * numberinteiro2),
    div: Math.round(Math.floor(numberinteiro1 / numberinteiro2)),
    sub: Math.round(numberinteiro1 - numberinteiro2),
  });  

const arrayGenerator = (string, b ) => {
  const keys = Object.keys(calculator());  
  const valores = Object.values(calculator());  
  const total = Object.assign(calculator());
  
  /* if (x1 === 'keys') {
    x2 = chaves;
  } else if (x1 === 'values') {
    x2 = valores;
  } else if (x1 === 'entries') {
    x2 = total;
  } */
};
  // Uma string que indica o tipo de conversão
  // Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 }

module.exports = { calculator, arrayGenerator };
