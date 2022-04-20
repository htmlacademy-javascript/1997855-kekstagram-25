
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

// Вводные параметры
const MAX_AVATARS = 6; // максимальное число для составления адреса директории img
const MAX_MESSAGES_TO_CONCAT = 2; // максимальное кол-во предложений для составления параметра message

// Mock data
const NAMES = [
  // Набор имён для комментаторов
  'Генрих',
  'Анита',
  'Татьяна',
  'Эрик',
  'Светлана',
  'Леонид',
  'Римма'
];
const MESSAGES = [
  // Набор рандомных предложений для составления параметра message
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Функции обработки
// объявляем фун-ию для получения рандомного целого числа в диапозоне от num1 до num2
function getRandomPositiveInteger(num1, num2) {
  const randomInteger = getIntegerNum(num1, num2);
  if(randomInteger < 0) {
    return 'is not a positive integer';
  }

  return randomInteger;
}

// объявляем фун-ию для получения рандомного числа в диапозоне от num1 до num2
function getRandomNum(num1, num2) {
  return Math.random() * (num2 - num1 + 1) + num1;
}
// объявляем фун-ию для получения целого числа в диапозоне от num1 до num2
function getIntegerNum(num1, num2) {
  return Math.floor(getRandomNum(num1, num2));
}

// объявляем фун-ию для получения ключа message массива comments
function getMessages(count) {
	let message = '';
  // через цикл for добавляем к пустой строке message рандомные эл-ты массива MESSAGES
	for (let i = 0; i <= count; i++) {
		message += MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)] + '!!!';
	}
	return message;
}

// объявляем фун-ию для генерирования объектов массива (фотографий)
function genImages(count) {
	let objects = [] // пустой массив
	for (let i = 1; i <= count; i++) {
		const object = {
			id: i,
			url: `photos/${i}.jpg`,
			description: getMessages(getRandomPositiveInteger(1, MAX_MESSAGES_TO_CONCAT)),
			likes: getRandomPositiveInteger(15, 200),
			messages: genComments(4)
		}
    // через цикл добавляем в массив объекты с помощью метода .push
		objects.push(object);
	}
	return objects;
}

/**
*/

// объявляем фун-ию для генерирования комментариев
function genComments(count) {
	// Нестандартный подход для генерации массива, где length — параметры длины массива.
	return Array.from({ length: count }, (v, k) => k = {
			id: v, // В id пишем индекс прохода
			avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
			// В id пишем индекс прохода
			message: getMessages(getRandomPositiveInteger(1, MAX_MESSAGES_TO_CONCAT)),
			name: 'Вася',
		});
}

// Результат
// создаем переменную, результатом которой будем наш массив из объектов
const outputData = genImages(25);

const {id} = outputData[0];

console.log(id);

// выводим наш массив из объектов в консоль
console.log(outputData);
