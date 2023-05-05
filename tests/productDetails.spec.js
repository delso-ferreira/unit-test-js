const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function')});
  });  
  it('Teste se o retorno da função é um array.', () => {
    expect(productDetails(Object)).toMatchObject(productDetails(Object))})
    it('Teste se o array retornado pela função contém dois itens dentro.', () => {
      const array = productDetails(['a', 'b'])
      expect(Math.abs(array.length)).toBe(((2)))});  
      it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {        
        expect((productDetails(Object.keys(productDetails)))).toMatchObject(productDetails(Object.keys(productDetails)))});  
        it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
          expect(productDetails('suco', 'cerveja')).toEqual(productDetails('suco', 'cerveja'))})
          it('Teste se os dois productIds terminam com 123', () => {                        
            const array = productDetails(['a', 'b'])
            expect(array[0].details.productId.endsWith('123') && array[1].details.productId.endsWith('123')).toEqual(true);         
          })
    
  
    // ESCREVA SEUS TESTES ABAIXO:                 
    
  