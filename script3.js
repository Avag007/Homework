// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.
function sortedArr(arr){
    let row=-1
      for(let i=0;i<arr.length;i++){
        if(arr[i]<=arr[i+1]){
          row*=1
        }else if(arr[i]>=arr[i+1]){
          row=i+1
        }  
      }
      console.log(row)
  }
  sortedArr([-9, -4, -4, 3, 12, 4, 5])

//   2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array
function shortedArr(arr){
    let arr1=[]
    let row=0
      for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
          row+=arr[i][j]
        }
        arr1.push(row)
        row=0
      }
      console.log(arr1)
  }
  shortedArr([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]])

//   3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length
function filteredOddArr(arr){
    let arr1=[];
      for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
          arr1.push(arr[i])
        }
      }
     let arr0=[]
     arr1.forEach(function (val, ){
              arr0.push(val*arr1.length)
      })
      console.log(arr0)
      }
  filteredOddArr([5, 4, 78, 0, -3, 7])

//   4. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
// elements starting from a to b spaced by step.
function getFillArr(x,y,z){
    let arr=[]
    for(let i=x;i<y;i=i+z){
      arr.push(i)
    }
    arr.push(y)
    console.log(arr)
  }
  getFillArr(1,5,0.5)

//  5. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements)
function fn(arr) {
  const count = {};
arr.forEach(function(i) { count[i] = (count[i] || 0) + 1;});
for( let key in count){
  count[key]=count[key]/arr.length
}
console.log(count)
}
fn([1, 1, 2, 2, 3])
fn([4, 4])