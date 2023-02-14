var video_info = JSON.parse(window.localStorage.getItem("vidSrc"));
var firstPlay = true;
window.onload = function(){
  setDefault(document.querySelector(".player-video"),document.querySelector(".download-button"),document.querySelector(".video-title"));
  playVideo(document.querySelector('.play-button'),document.querySelector(".player-video"));
  upadteTime(document.querySelector(".player-video"),document.querySelector(".video-time-input"));
  volumeControls(document.querySelector(".volume-input"),document.querySelector(".player-video"));
  fullScreenVideo(document.querySelector(".full-screen-button"),document.querySelector(".player-video"));
}

function fullScreenVideo(button,video,title){
  video.src = video_info.videoSrc;
  document.querySelector(".video-title").innerHTML = video_info.videoTitle
  button.addEventListener("click",function(){
    video.webkitRequestFullscreen();
  });
}

function setDefault(video,download_button) {
  video.currentTime = 29
  download_button.href = video_info.videoSrc;
}

function playVideo(button,video){
  button.addEventListener("click",function() {
    if (firstPlay == true) {
      video.currentTime = 0;
      firstPlay = false;
    }
     if (video.paused == true) {
       video.play();
       this.innerHTML = '<i class="fa fa-pause"></i>'
       }
     else {
      video.pause();
      this.innerHTML = '<i class="fa fa-play"></i>'
     }
  });

}

function upadteTime(video,input){
  video.addEventListener("timeupdate",function(){
    console.log(video.value)
    seconds = Math.floor(video.currentTime % 60);
    minutes = Math.floor(video.currentTime / 60);
    fullTime = `${seconds}:${minutes}`;
    input.value = video.currentTime /video.duration * 100;
  });

  input.addEventListener("input",function(e){
     video.currentTime = e.target.value / 100 * video.duration;
  });
}


function volumeControls(volume_btn,video){
  volume_btn.addEventListener("input",function(){
    video.volume = volume_btn.value;
  });
}


