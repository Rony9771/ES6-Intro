//emplicity
//no parameter
const getPie = () => 3.1416;


// one parameter
const onePara = (num) =>num*2;

//multiLine arrow function 

const multi = (a, b,c,d) =>{
  const multiply = a * b;
  const MultiAno = c*d;
  const total = multiply + MultiAno;
  return total;

}
const add = multi( 3, 4, 6,7);
console.log (add);