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
  
  return Math.round(sumIndex / array.length); 
};

module.exports = average;