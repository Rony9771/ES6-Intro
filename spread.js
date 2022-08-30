const max = Math.max(34, 79 ,566);
console.log (max);

// we have  to add ... 
const numbers = [12, 56, 89 ,99, 588 ];
const max2 = Math.max(...numbers);
console.log(...numbers);
console.log(max2);

const num2 = numbers;
numbers.push (66);
num2.push(67);
console.log(num2);
console.log(numbers);

// only add value specific array 
const num3 = [numbers];
num3.push(89);
console.log(num3);

// use ... add value in same array
const num4 = [...numbers];
num4.push(90);
console.log(num4);


//power of spread operator
const num5 = [13,...numbers, 234, 678]
console.log(num5);


