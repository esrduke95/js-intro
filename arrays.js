/*console.log('Arrays!');

const coolArray = ['Luke', 'Matt', 'Mark', 'Jon'];
//console.log(coolArray.join(', '));
console.log('before join:', coolArray);
console.log(coolArray.join(' | '));
console.log('after join: ', coolArray);
const popped = coolArray.pop();*/

const weirdArray = ['maps', 'boxes', 'tires']
console.log(weirdArray[2]);

const valueFinder = (arr, idx) => {
  return (arr[idx])
}

//console.log(valueFinder(coolArray, 2));
//console.log(valueFinder([1,2,3,4,5]));

const nameArray = ['Emma', 'Jenah', 'Luna', 'Abigail', 'Eli']
console.log(nameArray.includes('Luna') );

const isLuna = (arr) => {
  return arr.includes('Luna');
}

console.log(isLuna(['one', 'two', 'Luna']));
console.log(isLuna(weirdArray));
