const photo = document.querySelector('.photo');
const next = document.querySelector('.photo__next');
const prev = document.querySelector('.photo__prev');
const photos = ['image-tanya', 'image-john'];
const blockquotes = document.querySelectorAll('blockquote');

blockquotes[0].style.display = 'block';

let i = 0;

const newPerson = () => {
  i >= photos.length - 1 ? (i = 0) : i++;

  photo.style.backgroundImage = `url('../images/${photos[i]}.jpg')`;

  blockquotes.forEach((blockquote) => (blockquote.style.display = 'none'));

  blockquotes[i].style.display = 'block';
};

next.addEventListener('click', newPerson);
prev.addEventListener('click', newPerson);
