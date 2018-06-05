// 1.- computeAverageLengthOfWords

// word1 = 'code' (4)
// word2 = 'programs' (8)
// (4+8)/2= 12/2= 6

const computeAverageLengthOfWords = (word1, word2) => {
  const output = (word1.length + word2.length) / 2;
  return output;
};
console.log(computeAverageLengthOfWords('code', 'programs'));


// 2.- getNthElement

// posicion 1, array [1,3,5]-->3

const getNthElement = (array, n) => {
  const output = array[n];
  return output
};
console.log(getNthElement([1, 3, 5], 1));

/*
// 3.- convertDoubleSpaceToSingle

// string='string  whit  double  space' --> string whit double space'

const convertDoubleSpaceToSingle = (str) => {
  for (let i = 0; i < str.length; i++){
    if ()
    const output = ;
  }
    
  return output;
};
console.log(convertDoubleSpaceToSingle('string  whit  double  space'));
*/

// 4.- areValidCredentials

// name='Ritu' , password='mylongpassword' --> true
// name > 3 , password >=8

const areValidCredentials = (name, password) => {
  if (name.length > 3 && password.length >= 8) {
    const output = true;
    return output;
  } else {
    const output = false;
    return output;
  }
};

console.log(areValidCredentials('Ritu', 'mylongpassword'));

