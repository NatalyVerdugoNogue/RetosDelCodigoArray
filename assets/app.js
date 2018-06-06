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


// 3.- convertDoubleSpaceToSingle

// string='string  whit  double  space' --> string whit double space'
// gi "global" e "ignore case" (expresión regular)

const convertDoubleSpaceToSingle = (str) => {
  const output = str.replace(/  /gi, ' ');
  return output;
};
console.log(convertDoubleSpaceToSingle('string  whit  double  space'));

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

// 5.- findPairForSum

// array [3, 34, 4, 12, 5, 2] number 9
// suma dos num array = number --> 4+5= 9

const findPairForSum = (array, number) => {
  let pair = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        pair = [array[i], array[j]];
      }
    }
  }
  return pair;
};
console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));

// 6.- filterOddElements

// array impares de [1, 2, 3, 4, 5] --> [1, 3, 5]

const filterOddElements = (arr) => {
  const output = arr.filter((index) => {
    return index % 2 !== 0;
  });
  return output
};
console.log(filterOddElements([1, 2, 3, 4, 5]));

// 7.- findShortestWordAmongMixedElements

//[4, 'two', 2, 'three'] --> 'two' (palabra mas corta)

const findShortestWordAmongMixedElements = (arr) => {
  const newArr = arr.filter(index => typeof index === 'string');
  if (newArr.length === 0) {
    output = '';
    return output;
  } else {
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[i].length > newArr[j].length) {
          output = newArr[j];
        } else {
          output = newArr[i];
        };
        return output;
      };
    };
  };
};
console.log(findShortestWordAmongMixedElements([4, 'two', 2, 'three']));

// 8.- findSmallestNumberAmongMixedElements

// [4, 'lincoln', 9, 'octopus'] --> 4 (numero menor)

const findSmallestNumberAmongMixedElements = (arr) => {
  const newArr = arr.filter(index => typeof index === 'number');

  if (newArr.length === 0) {
    output = 0;
    return output;
  } else {
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[i] > newArr[j]) {
          output = newArr[j];
        } else {
          output = newArr[i];
        };
      };
      return output;
    };
  };
};
console.log(findSmallestNumberAmongMixedElements([10, 9, 'YES', 'WHY', 1, 'AHH']))