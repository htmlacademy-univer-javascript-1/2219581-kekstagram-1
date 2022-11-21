import { OpenBigPicture } from './big-picture.js';
import {createPhotos} from './data.js';

const photoTemplate = document.querySelector('#picture').textContent.querySelector('.picture');
const photoList = document.querySelector('pictures');
const photoListFragment = document.createDocumentFragment();
const photosArray = createPhotos();

photosArray.forEach(element => {
    const picture = photoTemplate.cloneNode(true);
    const pictureImg = picture.querySelector('.picture_img');

    pictureImg.src = element.url
    pictureImg.dataset.element = JSON.stringify(element);

    picture.querySelector('.picture__comments').textContent = element.comments.length.toString();
    picture.querySelector('.picture__likes').textContent = element.likes;

    photoListFragment.appendChild(picture);

});

photoList.appendChild(photoListFragment);

photoList.addEventListener('click', (evt) =>{
  const target = evt.target;
  if (target.nodeName === 'IMG'){
    OpenBigPicture(JSON.parse(target.dataset.element))
  }

})
