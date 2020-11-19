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
  $(".left").click(function(){
    $("#carouselpics").carousel("prev");
  });
  $(".right").click(function(){
    $("#carouselpics").carousel("next");
  });
});