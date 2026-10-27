 
let a = 100;

console.log(a++ + ++a +a++ + ++a);
100+102+102+104

console.log(a); 
 //Output -> 408  ,104


let b = 37;

console.log(--b + b--); //72
//36 +36 -> -35
console.log(b); // -35
//console.log(b);
//console.log(—b + b—); //error invlaid token 


let x = 5; 
let y = a-- - --a; 
console.log(x,y); //5,2


let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i); //3,3

