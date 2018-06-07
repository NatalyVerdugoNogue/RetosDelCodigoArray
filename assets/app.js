// 1.- computeAverageLengthOfWords

// word1 = 'code' (4)
// word2 = 'programs' (8)
// (4+8)/2= 12/2= 6

const computeAverageLengthOfWords = (word1, word2) => {
  const output = (word1.length + word2.length) / 2;
  return output;
};
console.log('computeAverageLengthOfWords', computeAverageLengthOfWords('code', 'programs'));


// 2.- getNthElement

// posicion 1, array [1,3,5]-->3

const getNthElement = (array, n) => {
  const output = array[n];
  return output
};
console.log('getNthElement', getNthElement([1, 3, 5], 1));


// 3.- convertDoubleSpaceToSingle

// string='string  whit  double  space' --> string whit double space'
// gi "global" e "ignore case" (expresión regular)

const convertDoubleSpaceToSingle = (str) => {
  const output = str.replace(/  /gi, ' ');
  return output;
};
console.log('convertDoubleSpaceToSingle', convertDoubleSpaceToSingle('string  whit  double  space'));

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
console.log('areValidCredentials', areValidCredentials('Ritu', 'mylongpassword'));

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
console.log('findPairForSum', findPairForSum([3, 34, 4, 12, 5, 2], 9));

// 6.- filterOddElements

// array impares de [1, 2, 3, 4, 5] --> [1, 3, 5]

const filterOddElements = (arr) => {
  const output = arr.filter((index) => {
    return index % 2 !== 0;
  });
  return output
};
console.log('filterOddElements', filterOddElements([1, 2, 3, 4, 5]));

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
console.log('findShortestWordAmongMixedElements', findShortestWordAmongMixedElements([4, 'two', 2, 'three']));

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
console.log('findSmallestNumberAmongMixedElements', findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']))

// 9.- getLongestWordOfMixedElements (palabra mas larga)

// [3, 'word', 5, 'up', 3, 1] --> word

const getLongestWordOfMixedElements = (arr) => {
  const newArr = arr.filter(index => typeof index === 'string');
  if (newArr.length === 0) {
    output = '';
    return output;
  } else {
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[i].length > newArr[j].length) {
          output = newArr[i];
        } else {
          output = newArr[j];
        };
        return output;
      };
    };
  };
};
console.log('getLongestWordOfMixedElements', getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]));

// 10.- getLargestNumberAmongMixedElements

// [3, 'word', 5, 'up', 3, 1] --> 5 (numero mayor)

const getLargestNumberAmongMixedElements = (arr) => {
  const newArr = arr.filter(index => typeof index === 'number');
  if (newArr.length === 0) {
    output = 0;
    return output;
  } else {
    const compareNumeric = (a, b) => {
      return b - a;
    };
    newArr.sort(compareNumeric);
    return newArr[0];
  };
  return output;
};
console.log('getLargestNumberAmongMixedElements', getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]));

// 11.- computeSumOfAllElements

// [1, 2, 3]--> 6 (suma de elementos)

const computeSumOfAllElements = (arr) => {
  let addition = 0;
  for (let i = 0; i < arr.length; i++) {
    addition = addition + arr[i];
  };
  return addition
};
console.log('computeSumOfAllElements', computeSumOfAllElements([1, 2, 3]));

// 12.- computeSumBetween

// (2, 5) --> 9 (suma de numeros entre esos dos numeros, sin el ultimo numero)
// si num1 > num 2 devolver 0

const computeSumBetween = (num1, num2) => {
  const array = [];
  if (num1 > num2) {
    output = 0;
    return output;
  };
  for (i = num1; i < num2; i++) {
    array.push(i);
  };
  let addition = 0;
  for (let i = 0; i < array.length; i++) {
    addition = addition + array[i];
  };
  return addition
};
console.log('computeSumBetween', computeSumBetween(2, 5));

// 13.- getLongestOfThreeWords

// ('estos', 'tres', 'palabras') --> 'palabras' (palabra mas larga)
// si son iguales regresar primera 

const getLongestOfThreeWords = (word1, word2, word3) => {
  if (word1.length >= word2.length) {
    word = word1;
  } else {
    word = word2;
  };
  if (word.length < word3.length) {
    word = word3;
  };
  return word;
};
console.log('getLongestOfThreeWords', getLongestOfThreeWords('estos', 'tres', 'palabras'));

// 14.- findShortestOfThreeWords

// ('a', 'dos', 'tres') --> 'a' (palabra mas corta)
// si son iguales regresar primera 

const findShortestOfThreeWords = (word1, word2, word3) => {
  if (word1.length <= word2.length) {
    word = word1;
  } else {
    word = word2;
  };
  if (word.length > word3.length) {
    word = word3;
  };
  return word;
};
console.log('findShortestOfThreeWords', findShortestOfThreeWords('a', 'dos', 'tres'));

// 15.- calculateBillTotal

// 20 --> 24.9

const calculateBillTotal = (preTaxAndTipAmount) => {
  const tax = 1.095;
  const tip = 0.15;
  const total = (preTaxAndTipAmount * tax) + (preTaxAndTipAmount * tip);
  return total;
};
console.log('calculateBillTotal', calculateBillTotal(20));

// 16.- convertScoreToGrade

// 91 --> A
// (100 - 90) -> 'A'
// (89 - 80) ->' B '
// (79 - 70) -> 'C'
// (69 - 60) -> 'D'
// (59 - 0) -> 'F'

const convertScoreToGrade = (score) => {
  if (score > 100) {
    return 'PUNTUACION INVALIDA'
  };
  if (score <= 100 && score >= 90) {
    return 'A'
  };
  if (score <= 89 && score >= 80) {
    return 'B'
  };
  if (score <= 79 && score >= 70) {
    return 'C'
  };
  if (score <= 69 && score >= 60) {
    return 'D'
  };
  if (score <= 59 && score >= 0) {
    return 'F'
  };
  if (score < 0) {
    return 'PUNTUACION INVALIDA'
  };
};
console.log('convertScoreToGrade', convertScoreToGrade(91));