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

function mood() {
  if (sessionStorage.getItem("mode") == null || undefined || '') {
    sessionStorage.setItem("mode","light-mode");
    document.body.classList = sessionStorage.getItem("mode");
  } else {
    document.body.classList = sessionStorage.getItem("mode");
  }
}
function dark() {
   if (document.body.classList.contains('light-mode')) {
     document.body.classList.toggle("light-mode");
     document.body.classList.add("dark-mode");
   } else {
     if (document.body.classList.contains('dark-mode')) {
     document.body.classList.toggle("dark-mode");
//     now.innerText = 'dark';
//     alert(now.innerText);
     document.body.classList.add("light-mode");
     }
    }
sessionStorage.setItem("mode",document.body.classList);
}

