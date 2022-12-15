// 1. Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.
function pair(arr) {
  let result = arr[0] * arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] > result) {
      result = arr[i] * arr[i + 1];
    }
  }
  return result;
}
console.log(pair([1, 3, 5, 8, 14]));
//  ստորև 2 ամենամեծ զույգերի արտադրյալը
function pair(arr) {
  const x = Math.max(...arr);
  arr.splice(arr.indexOf(x));
  const y = Math.max(...arr);
  return x * y;
}
console.log(pair([4, 8, 19, 10, 14, 15, 20, 10]));
//2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.
function findMissingNum(arr) {
  let row = [];
  row.push(Math.min(...arr));
  for (let i = row[0]; i < Math.max(...arr); i++) {
    if (!arr.includes(i)) {
      row.push(i);
    }
  }
  console.log(row);
  return row.length - 1;
}
console.log(findMissingNum([4, 19, 10, 14, 15, 8, 10]));

// 4.Insert a n positive number. Print the n-st prime number.
function findPrime(num) {
  let result = [];
  for (let i = 0; result.length < num; i++) {
    let row = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        row = 1;
        break;
      }
    }
    if (i > 1 && row == 0) {
      result.push(i);
    }
  }
  return result[num - 1];
}
console.log(findPrime(15));
