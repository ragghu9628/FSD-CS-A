var a;//We use let to solve memory leak
var b=5;
var c=10;
{
    let d=11;
    console.log(a);
    console.log(b);
    console.log(c);
}
 console.log(a);
 console.log(b);
console.log(d);

