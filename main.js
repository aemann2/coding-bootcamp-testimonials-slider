const photo = document.querySelector('.photo');
const next = document.querySelector('.photo__next');
const prev = document.querySelector('.photo__prev');
const photos = ['image-tanya', 'image-john'];

let count = 0;

const newPhoto = () => {
  count >= photos.length - 1 ? (count = 0) : count++;

  photo.style.backgroundImage = `url('../images/${photos[count]}.jpg')`;
};

next.addEventListener('click', newPhoto);
prev.addEventListener('click', newPhoto);
