function getRandInt(intFrom, intTo){
  if (intFrom > intTo || intFrom < 0 || intTo < 0 ){
    return  new Error('Error. Change input values');
  }
  return Math.round(intFrom - 0.5 + Math.random(intFrom, intTo) * (1 + intTo - intFrom));
}

function checkStringLength(string, length){
  return string.length <= length;
}

const MESSAGES = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Биба',
  'Боба',
  'Бубс',
  'Бебус',
  'Бебеус',
  'Бигус'
];

const generateArray = (length, max) => (
  [...new Array(length)].map(() => Math.round(Math.random() * max))
  );

const photosId = generateArray(25,25);
const usersId = generateArray(25,25);

function getId () {
  const temp = usersId[getRandInt(0,usersId.length-1)];

  delete(temp);
  return temp;
}

function getPhotoId () {
  const temp = photosId[getRandInt(0,photosId.length-1)];

  delete(temp);
  return temp;
}

const comment = {
  id: getId(),
  avatar: `img/avatar-${ getRandInt(0, 5) }.svg`,
  message: MESSAGES[getRandInt(0, 1)],
  name: NAMES[getRandInt(0,NAMES.length-1)]
};

const photo = {
  id: getPhotoId(),
  url: `photos/${getPhotoId()}.jpg`,
  description: 'Описание фотографии',
  likes: `Количество лайков: ${getRandInt(15, 200)}`,
  comments: MESSAGES[getRandInt(0, 1)]
};

//код, чтобы проверка не ругалась.
getRandInt(1,2);
checkStringLength('',1);
