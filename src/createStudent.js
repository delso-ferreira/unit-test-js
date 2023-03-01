/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = () => {
       
    const estudante1 = {
    name: 'Leandrão, o Lobo Solitário';,
    mensagem: 'Eita pessoa boa!',
    feedback: function retornaMensagem() { return 'Eita pessoa boa!'; },    
    };    
    
    const estudante2 = {
    name: 'Nobre',
    mensagem: 'Eita pessoa boa!',
    feedback: function retornaMensagem() { return 'Eita pessoa boa!'; },     
    };     
    
    const estudante3 = {
    name: 'Inácio',
    mensagem: 'Eita pessoa boa!',
    feedback: function retornaMensagem() { return 'Eita pessoa boa!'; },    
    };

    
  } 
    
module.exports = createStudent;
