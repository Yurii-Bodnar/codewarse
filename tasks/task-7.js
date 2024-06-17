//DESCRIPTION
// Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates
// that can run in O(n²) time won't work.

function findDup(array) {
  const uniqValue = [...new Set(array)];
  let dupValue;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== uniqValue[i]) {
      return (dupValue = array[i]);
    }
  }
  return dupValue;
}
// console.log(findDup([8, 2, 6, 3, 7, 2, 5, 1, 4]));
