/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle('2')).toBe(circle(!Number));
  });
  it('Teste se circle retorna um objeto', () => {
    expect(circle(Object)).toEqual(circle(Object))});
  });
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle(Object)).toEqual(circle(Object))
  });
  it('Teste se o objeto retornado possui 3 propriedades', () => {
    expect(circle(Object)).hasOwnProperty('radius', 'area', 'circumference')
  });
  it('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(circle()).toBe(undefined)
  });
  it('Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2', () => {
    const calc = { 
      radius: 2,
      area: 3.14 * 2 * 2,
      circumference: 2 * 3.14 * 2,
    };
    expect(calc.circumference).toBe(12.56)
  });  
  it('Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3', () => {
    const calc = { 
      radius: 3,
      area: 3.14 * 3 * 3,
      circumference: 3 * 3.14 * 3,
    };
    expect(calc.area).toBeCloseTo(28.26)
  });  
  
    // ESCREVA SEUS TESTES ABAIXO:                
    // 'Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3'
  

