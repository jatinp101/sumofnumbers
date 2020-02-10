function sumFor(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}

function sumWhile(n) {
  let sum = 0;
  let i = 0;
  while (i < n.length) {
    sum += n[i];
    i++;
  }
  return sum;
}

function sumRecursion(n) {
  if (n.length === 0) {
    return 0;
  }
  return n[0] + sumRecursion(n.slice(1, n.length));
}

function sumTheSimpleWay(n) {
  return _.reduce(n, function (memo, data) { return memo + data; }, 0);
}
const test = [1, 2, 3, 4];
console.log(sumFor(test));
console.log(sumRecursion(test));
console.log(sumWhile(test));
console.log(sumTheSimpleWay(test));
