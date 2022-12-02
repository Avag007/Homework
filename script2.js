// 1.Given two objects. Write a function that performs shallow compare.
let a={
    a:"1",
}
let b={
    a:"1",
    b:"2"
}
function shallowCompare (a,b){
  let result=1;
  let val=Object.values(a)
  for(let i=0;i<val.length; i++){
    result*=val[i]
  }
  let result2=1;
  let val2=Object.values(b)
  for(let j=0;j<val2.length;j++){
    result2*=val2[j]
  }
  if(result===result2){
    console.log("true")
  } else {
    console.log("false")
  }
}
shallowCompare(a,b)
// 2.Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
// word&quot;) is a word or phrase without a repeating letter.
function isIsogram(word)
 {
  for (i = 0; i < word.length; i++)
    if (word.substring(i + 1).includes(word.charAt(i)))
      return false;
  return true;
 }
 console.log(isIsogram("helo"))
 console.log(isIsogram("hello"))

//  3.Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
// 5, 8 …, ak = ak-1 + ak-2)
function fn(n){ 
    if(n===0 || n===1){
        console.log(n)
    } else{
     n=n-2;
let n1 = 0, n2 = 1, nextTerm;
for (let i = 0; i <= n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(nextTerm)
}
}
fn(5)
// 4. Insert a number. Calculate product and sum of the digits of the number. If product is
// divisible by the sum, print the quotient, otherwise print the remainder.
function calculateDigit(x){
      let y=""+x;
      result=1;
      colium=0
      for(let i=0;i<y.length;i++){
          result=result*y[i]
          colium=colium +(+y[i])
      }
      if(result % colium===0 ) {
          console.log("Quotient is"+" "+result/colium)
      } 
      else if (x===0) {
        console.log("Cannot calculate")
      } 
      else {
          console.log("Remainder is" +" "+ result%colium)
      }
  }
  calculateDigit(1233)
  // 5. Write a program to print X star pattern series.
  function printmatrix (x){
    let result=""
    let n=0;
    for(let i=0;i<x;i++){
        let row=""
        for(let j=0;j<x;j++){
            if(j===n || j===x-(n+1)){
                row+="*"
            }else{
                row+=" "
            }
        }
        n++
        result+=row+"\n"
    }
    console.log(result)
}
printmatrix(8)