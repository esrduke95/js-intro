console.log('objecjttjjts');

const str = 'Here is a string it is kinda long'
console.log(str.length);

const age = 23;

if (age >= 21) {
  console.log('have a beer');
} else {
  console.log('have a juicebox');
}

if (age !== 20) {
  console.log('have a beer');
} else {
  console.log('have a juicebox');
}
// object time

const expense = {
  id: 1,
  location; 'Baja Burrito',
  dollarAmount; '13.24',
  purpose; 'Lunch back when that was a thing',
  code; '100AB',
}

//in class challenge answer *not mine*
const priceChecker = (expenseObject) => {
  if (expenseObject.price > 1500) {
    expenseObject.approved = false;
  } else {
    expenseObject.approved = true;
  }

  return expenseObject;
}

console.log(priceChecker(expense));

//console.log('expense object before,', expense);

expense.employeeNumber = 1001;

// console.log('expense object after, ', expense);

console.log(expense.location);
console.log(expense['location']);


const newObj = {
  id: 1,
};

const newerObj = {
  id: 1,
};

console.log(newObj === newerObj);

const addChassis = () => {
  return { chassis: 'minivan'}
}

const addwheels = (car) => {
  car.wheels = 4;
  return car;
}

addwheels(addChassis());


// COMBOS
// const variable 'tickets' is an array of objects

const tickets = [
  {  
    id: 1,
    location; 'Baja Burrito',
    dollarAmount; '13.24',
    purpose; 'Lunch back when that was a thing',
    code; '100AB',
  },
  {
    id: 1,
    location; 'Baja Burrito',
    dollarAmount; '13.24',
    purpose; 'Lunch back when that was a thing',
    code; '100AB',
  }
];
