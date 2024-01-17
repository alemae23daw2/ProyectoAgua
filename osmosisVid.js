/*
 * Programa HTML5 que de manera automàtica mostra instantànies d'un vídeo encastat.
 * Utilitza contingut de la xarxa, o un servidor d'streaming
 * @author sergi.grau@fje.edu
 * @version 2.0
 * date 19.01.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 19.01.2017
 * - programa que mostra com es pot treballar amb l'API video
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */

window.onload = function () {
  var video = document.getElementById("movie");
  var playButton = document.getElementById("playButton");
  var progressBar = document.getElementById("progressBar");
  var currentTimeSpan = document.getElementById("currentTime");
  var totalDurationSpan = document.getElementById("totalDuration");

  playButton.onclick = function() {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  };
  video.addEventListener('timeupdate', function() {
    // Update the progress bar value
    progressBar.value = (video.currentTime / video.duration) * 100;

    // Update the current time display
    currentTimeSpan.textContent = formatTime(video.currentTime);

    // Update the total duration display
    totalDurationSpan.textContent = formatTime(video.duration);
});

progressBar.oninput = function() {
    // Set the video playback position based on the progress bar value
    video.currentTime = (progressBar.value / 100) * video.duration;
};

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}
};