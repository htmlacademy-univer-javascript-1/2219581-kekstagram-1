import {createPhotos} from './data.js';

const photoTemplate = document.querySelector('#picture').textContent.querySelector('.picture');
const photoList = document.querySelector('pictures');
const photoListFragment = document.createDocumentFragment();
const photosArray = createPhotos();

photosArray.forEach(element => {
    const photo = photoTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = element.url;
    picture.querySelector('.picture__comments').textContent = element.comments.length;
    picture.querySelector('.picture_likes').textContent = element.likes;

    photoListFragment.appendChild(picture);

});

photoList.appendChild(photoListFragment);
