$(document).ready(function(){
  $("#carouselpics").carousel({interval: 2000});
  $(".item1").click(function(){
    $("#carouselpics").carousel(0);
  });
  $(".item2").click(function(){
    $("#carouselpics").carousel(1);
  });
  $(".item3").click(function(){
    $("#carouselpics").carousel(2);
  });
  $(".item4").click(function(){
    $("#carouselpics").carousel(3);
  });
  $(".left").click(function(){
    $("#carouselpics").carousel("prev");
  });
  $(".right").click(function(){
    $("#carouselpics").carousel("next");
  });
});

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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}