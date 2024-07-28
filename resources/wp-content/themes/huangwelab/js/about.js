var $j = jQuery.noConflict();

var videoContainer = document.getElementById('embed-container');
var videoOptions = document.getElementsByClassName('in-the-studio__option');
var videoArray = [];

$j('.in-the-studio__option__video').each(function() {
  videoArray.push(this.innerHTML);
});

if(videoOptions[0]) {
  videoOptions[0].classList.add('current-video');
}

function videoClicked(i) {
  var video = i - 1;
  var currentVideo = document.getElementsByClassName('current-video')[0];

  videoContainer.innerHTML = videoArray[(video)];

  currentVideo.classList.remove('current-video');
  videoOptions[video].classList.add('current-video');
}
