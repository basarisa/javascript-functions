// Start coding here
const minNumber = findMinNumber(20, 10);

console.log(minNumber); // 10

function findMinNumber(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
