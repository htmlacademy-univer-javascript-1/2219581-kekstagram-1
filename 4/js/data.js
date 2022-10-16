import {
  getRandInt,
  getId,
  getPhotoId} from '/util.js';

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

const comment = {
  id: getId(usersId),
  avatar: `img/avatar-${ getRandInt(0, 5) }.svg`,
  message: MESSAGES[getRandInt(0, 1)],
  name: NAMES[getRandInt(0,NAMES.length-1)]
  };
  // eslint-disable-next-line no-unused-vars
const photo = {
  id: getPhotoId(photosId),
  url: `photos/${getPhotoId(photosId)}.jpg`,
  description: 'Описание фотографии',
  likes: `Количество лайков: ${getRandInt(15, 200)}`,
  comments: MESSAGES[getRandInt(0, 1)]
  };

export{
  comment,
  photo
  };
