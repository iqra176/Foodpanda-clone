// Simple front-end JS for animation or interaction

// Animate the "choose location" button on hover with a pulse effect
const chooseLocationBtn = document.querySelector('header ul li:nth-child(7) a');

chooseLocationBtn.addEventListener('mouseenter', () => {
  chooseLocationBtn.style.transform = 'scale(1.1)';
  chooseLocationBtn.style.transition = 'transform 0.3s ease';
});

chooseLocationBtn.addEventListener('mouseleave', () => {
  chooseLocationBtn.style.transform = 'scale(1)';
});

// Optional: play/pause video on click
const video = document.getElementById('player');

video.addEventListener('click', () => {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
