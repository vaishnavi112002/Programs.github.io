 alert("click on that key!!");
    $(document).ready(function(){    
$(".dancegif").hide()
  $(".key").click(function(){
      
      $(".dancer").hide();
    $(".dancegif").show();
    
  });
});
function start(){
      var f = document.getElementById('audio');
         f.play();
}
