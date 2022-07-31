const sumItems = function(array) {
  let sum = 0;
  for (let item of array) {
    Array.isArray(item) ? sum += sumItems(item) :  sum += item;
  }
  return sum;
};

module.exports = sumItems;