import { OpenBigPicture } from './big-picture.js';
import {createPhotos} from './data.js';

const photoTemplate = document.querySelector('#picture').textContent.querySelector('.picture');
const photoList = document.querySelector('pictures');
const photoListFragment = document.createDocumentFragment();
const photosArray = createPhotos();

photosArray.forEach((pictureData) => {
  const picture = photoTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');

  pictureImg.src = pictureData.url;
  pictureImg.dataset.pictureData = JSON.stringify(pictureData);

  picture.querySelector('.picture__comments').textContent = pictureData.comments.length.toString();
  picture.querySelector('.picture__likes').textContent = pictureData.likes;

  photoListFragment.appendChild(picture);
});

photoList.appendChild(photoListFragment);


photoList.appendChild(photoListFragment);

photoList.addEventListener('click', (evt) =>{
  const target = evt.target;
  if (target.nodeName === 'IMG'){
    OpenBigPicture(JSON.parse(target.dataset.pictureData));
  }
});
