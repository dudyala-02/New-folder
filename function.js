const laptop={
brand:"lenovo",
color:"cement",
price:"50000",
}
for(let k in laptop)
{
    console.log(`laptop ${k} is ${laptop[k]}`);
;}
let x=prompt("enter 1st value");
let y=prompt("enter 2nd value");
let action=prompt("enter operation to be performed");
x=parseInt(x);
y=parseInt(y);
switch(action)
{ 
    case "+":
        alert(x+y);
        break;
    case "-":
        alert(x-y);
        break;
    case "*":
        alert(x*y);
        break;
    case "/":
        alert(x/y);
        break;
    case "%":
        alert(x%y);
        break;
    default:
        alert("no operation");
        break;
}


function greet(params){
    console.log('function greet');
}
function sum(a,b)
{
    return a+b;

}
greet();
let result=sum(2,8);
console.log(result);
console.log(sum(5,2));
let a=prompt("enter a value");
alert(a);
let input=parseInt(a);
console.log(typeof input);
