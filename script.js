const bannerContainer = document.querySelector('.banner-container');
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
];

let currentImageIndex = 0;

function slideImages() {
  bannerContainer.innerHTML = `<img src="${images[updateImagePath(images[currentImageIndex])]}">`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

function updateImagePath(imagePath) {
  return imagePath;
}

setInterval(slideImages, 3000); 

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;

  if (name === '' || email === '' || destination === '') {
    alert('Please fill out all required fields.');
    event.preventDefault();
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault();
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
