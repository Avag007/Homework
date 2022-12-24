// 1. Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)
function removeArr(arr) {
  let arr1 = [];
  function loop(i) {
    if (i >= arr.length) {
      return;
    }
    arr1.push(arr[i]);
    return loop(i + 1);
  }
  loop(1);
  return arr1;
}
console.log(removeArr([6, 78, "n", 0, 1]));
// 2.Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).
result = [];
function flattArr(arr) {
  let i = 0;
  while (i < arr.length) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      flattArr(arr[i]);
    }
    i++;
  }
  return result;
}
console.log(flattArr([4, 5, [5, 15, [8, 9]], 20, 15]));

// 3. Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

function calculatesDigit(num) {
  let result = 0;
  const str = "" + num;
  for (let i = 0; i < str.length; i++) {
    result += +str[i];
  }
  if (result > 9) {
    const x = calculatesDigit(result);
    return x;
  }
  return result;
}

console.log(calculatesDigit(999999999999));
// 4.Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.

let arr = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm&quot", readStatus: true, percent: 20 },
  { book: "Solaris&quot", readStatus: false, percent: 90 },
  { book: "The Fall&quot", readStatus: true, percent: 50 },
  { book: "White Nights&quot", readStatus: false, percent: 60 },
  { book: "After Dark&quot", readStatus: true, percent: 70 },
];
const result = arr
  .filter(function (val) {
    if (val.readStatus === true) {
      return true;
    }
  })
  .sort(function (a, b) {
    if (a.percent > b.percent) {
      return -1;
    } else {
      return 5;
    }
  })
  .map((val) => {
    val.percent = val.percent + "%";
    return val;
  });
console.log(result);
