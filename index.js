const sumItems = function(array) {
  let sum = 0;
  for (let item of array) {
    Array.isArray(item) ? sum += sumItems(item) :  sum += item;
  }
  return sum;
};
// Poor Socrates would argue there's a way to do this without declaring a sum variable.
module.exports = sumItems;