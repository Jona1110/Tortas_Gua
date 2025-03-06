document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

const video = document.getElementById('video-tortas');
const playButton = document.getElementById('play-button');

// Ocultar el botón si el video está en reproducción automática
if (!video.paused) {
  playButton.style.display = 'none';
}

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
  } else {
    video.pause();
  }
});

video.addEventListener('play', () => {
  playButton.style.display = 'none';
});

video.addEventListener('pause', () => {
  playButton.style.display = 'block';
});
