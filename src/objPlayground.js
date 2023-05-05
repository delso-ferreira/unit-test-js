const calculator = (numberinteiro1, numberinteiro2) => ({
    sum: Math.round(numberinteiro1 + numberinteiro2),
    mult: Math.round(numberinteiro1 * numberinteiro2),
    div: Math.round(Math.floor(numberinteiro1 / numberinteiro2)),
    sub: Math.round(numberinteiro1 - numberinteiro2),
  });  

const arrayGenerator = (string, b) => {  
  if (string === 'keys') return Object.keys(b);
  if (string === 'values') return Object.values(b);
  if (string === 'entries') return Object.entries(b);
};
  
module.exports = { calculator, arrayGenerator };
