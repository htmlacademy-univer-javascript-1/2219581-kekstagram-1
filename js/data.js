import {
  getRandInt,
  getId,
  getPhotoId,
  generateArray} from '/util.js';

  const COUNT_PHOTO = 25;

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

const photosId = generateArray(25,25);
const usersId = generateArray(25,25);

const CreateComment = () => ({
  id: getId(usersId),
  avatar: `img/avatar-${ getRandInt(0, 5) }.svg`,
  message: MESSAGES[getRandInt(0, 1)],
  name: NAMES[getRandInt(0,NAMES.length-1)]
});
  // eslint-disable-next-line no-unused-vars
const CreatePhoto = () => ({
  id: getPhotoId(photosId),
  url: `photos/${getPhotoId(photosId)}.jpg`,
  description: 'Описание фотографии',
  likes: `Количество лайков: ${getRandInt(15, 200)}`,
  comments: Array.from({length: COUNT_PHOTO}, CreateComment)
});

const CreatePhotos = () => Array.from({length: COUNT_PHOTO}, CreatePhoto);

export{
  CreatePhotos
};
