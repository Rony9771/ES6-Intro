const fish ={
  name : "Elish",
  color : 'silver',
  price : 4000,
  phone : '0162380......'

}
const phone = fish.phone;
console.log(fish.phone);
console.log(phone);

//we have to use
const {price} =fish;
console.log (price);

// array destructuring

const [first,second] =[34, 56, 78, 90];
console.log (first);

const friends = ['Nabil', 'Kabil', 'habil', 'jamil'];
const [mokha, gadha , momin, abul] = friends;
console.log(mokha);

function getNames(){
  return ['habil', 'kabil'];
}
const [bad, good]=getNames();
console.log(good,bad);