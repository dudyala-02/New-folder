//const sum=(a,b)=>a+b;
//let data=sum(1,2);
alert(data);

const laptop={
brand:"lenovo",
color:"cement",
price:"50000",
}
for(let k in laptop)
{
    console.log(`laptop ${k} is ${laptop[k]}`);
;}


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
