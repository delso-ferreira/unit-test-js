const goodPerson = 'Eita pessoa boa!';

 const createStudent = (estudante) => ({
  name: estudante,
  feedback: () => goodPerson,
 });

module.exports = createStudent;
