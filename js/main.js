
function getRandomPositiveInteger(num1, num2) {
  const randomInteger = getIntegerNum(num1, num2);
  if(randomInteger < 0) {
    return 'is not a positive integer';
  }

  return randomInteger;
}

function getRandomNum(num1, num2) {
  return Math.random() * (num2 - num1 + 1) + num1;
}

function getIntegerNum(num1, num2) {
  return Math.floor(getRandomNum(num1, num2));
}

getRandomPositiveInteger(1, 100);
