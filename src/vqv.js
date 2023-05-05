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
