$('#myCarousel').carousel({
		pause: 'none'
})

function dark() {
  sessionStorage.getItem("mode");
  if (sessionStorage.getItem("mode") == "light-mode.css") {
    sessionStorage.setItem("mode","dark-mode.css");
  } else {
    if (sessionStorage.getItem("mode") == "dark-mode.css") {
      sessionStorage.setItem("mode","light-mode.css");
    }
  }
location.reload();
}

$(document).ready(function () {
  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
});
