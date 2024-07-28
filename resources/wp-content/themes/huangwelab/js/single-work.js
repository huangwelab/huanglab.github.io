var $j = jQuery.noConflict();

var awardsNews = document.getElementById('awards-news');
var awardsLink = document.getElementById('awards-link');
var newsLink = document.getElementById('news-link');
var awardsDiv = document.getElementById('awards-div');
var newsDiv = document.getElementById('news-div');

function setupAwardsNews() {
  if (awardsNews) {
    var firstLi = awardsNews.getElementsByTagName('li')[0];
    firstLi.classList.add('current-page-item');

    if (awardsLink) {
      awardsLink.addEventListener("click", awardsClicked);
    }

    if (newsLink) {
      newsLink.addEventListener("click", newsClicked);
    }

    toggleAwardsNews();
  }
}

function toggleAwardsNews() {
  if (awardsLink && awardsLink.classList.contains('current-page-item')) {
    newsDiv.classList.add('hidden');
    awardsDiv.classList.remove('hidden');
  } else if (newsLink && newsLink.classList.contains('current-page-item')) {
    awardsDiv.classList.add('hidden');
    newsDiv.classList.remove('hidden');
  }
}

function awardsClicked() {
  awardsLink.classList.add('current-page-item');
  newsLink.classList.remove('current-page-item');

  toggleAwardsNews();
}

function newsClicked() {
  newsLink.classList.add('current-page-item');
  awardsLink.classList.remove('current-page-item');

  toggleAwardsNews();
}

$j(document).ready(setupAwardsNews);
