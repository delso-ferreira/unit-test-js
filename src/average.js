/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
    
*/

// já está sendo criado o array no teste, não se faz necessário criar um array, apenas passar o paramêtro
// necessário juntar adicionar os index em um local e fazer o cálculo respectivamente pelo tamanho do array, que retorna um número

const average = (array) => {
  if (array.length === 0) { 
    return undefined;
  }
  
  let sumIndex = 0; // soma os index
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') { 
      return undefined;
    }
    sumIndex += array[index];
    }
  
  return Math.round(sumIndex / array.length); // retornar o valor inteiro do index pelo tamanho
};

module.exports = average;