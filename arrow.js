// function declaration
function add (first, second){
  const total  = first + second;
  return total;
}
const sum = add (10,30);
console.log (sum);

//function expression
 const add1 = function add1 (first,second){
  const total = first + second;
  return total;
 }
 const add2 = function(first,second){
  const total = first + second;
  return total;
 }

 //arrow function

 const add3 =(first,second) => first + second;
 const sum1 = add3(59, 11);
 console.log (sum1);