// Homework 1
//1.Given a positive integer.
let x=10;
let y= x % 10;
    if(y!=0 && x>=10){
       z=y+""+(x-y)/10
console.log(z)
}if(x<10){
    console.log(x)
}
else{
    z=x;
    console.log(z)
}
// 2. Given three numbers.
let x,y,z;
function numbers(x,y,z){    
if(x>y && y>z){
    console.log(z,y,x)
}if(x<y && x>z){
    console.log(z,x,y)
}if(x>y && y<z && x>z){
    console.log(y,z,x)
}if(x<y && x<z && y>z){
    console.log(x,z,y)}
 if(x>y && z>y && x<z ){
    console.log(y,x,z)
}if(x<=y && y<=z){
    console.log(x,y,z)
}if(x===z && y>=x){
    console.log(x,z,y)
}if(x===y && z<x){
    console.log(z,x,y)
}if(x===z && y<x){
    console.log(y,x,z)
}if(y===undefined || x===undefined || z===undefined){
    console.log("please entered corect 3 numbers")
}
}
numbers(5,20,-8)
// 3.Given the following code rewrite it using only two if operators. (Hint: use logical
// operators).
var n=+prompt();
var i=0;
var j=0;
if(n%2===0 && !Math.floor(n/10) ){ 
        i+=1; 
    }
if(n%3===0 && n%10===1){
        j+=1;
    }
// 4.Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
function area(figure,x,y){
    if(figure==="triangle" && x>0 && y>0){
        console.log("Square of the triangle is"+" "+(x*y/2))
    }
    if(x<=0 || y<=0){
        console.log("Please enter only positives")
    }
    if(figure==="rectangle" && x>0 && y>0){
        console.log("Square of the rectangle is"+" "+x*y)
    }   
}
area("rectangle",8,5)

// 5 Given an object. Invert it (keys become values and values become keys).
// Դավիթ ջան ես 5-ի մեջ կիսատա , կրկնվող դեպքը չեղավ իմ մոտ քննարկելուց կնայենք


let obj= {
    a:  "1",
    b:  "8",
    C:  "9",
    d:  "15"
}
let a=Object.keys(obj)
console.log(a)
console.log(obj[a[3]])
let b=new Object;
console.log(b)
let c=Object.values(obj)
console.log(c)
let i=0;
while(i<c.length){
    b[c[i]]=a[i]
    i++
}
console.log(b)

