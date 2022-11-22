const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');

function СloseBigPicture(){
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCloseButton.removeEventListener('click', СloseBigPicture);
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function AddModalCloseHandlers(){
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureCloseButton.addEventListener('click', СloseBigPicture);
  document.addEventListener('keydown', onPopupEscKeydown);
}

function OpenBigPicture(pictureData){
  AddModalCloseHandlers();
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length.toString();
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  const commentsList = bigPicture.querySelector('.social__comments');

  commentsList.innerHTML = '';
  pictureData.comments.forEach((commentData) => {
    commentsList.insertAdjacentHTML('beforeend', `
    <li class="social__comment">
        <img
            class="social__picture"
            src="${commentData.avatar}"
            alt="${commentData.name}"
            width="35" height="35">
        <p class="social__text">${commentData.message}</p>
    </li>`);
  });
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
}

function onPopupEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    СloseBigPicture();
  }
}

export {OpenBigPicture};
