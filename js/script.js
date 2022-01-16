$(document).ready(function(){
    $(".menus li a").click(function(e){
      // alert(e);

      let m=$(this).attr("href");
      $("html,body").animate({
          scrollTop:$(m).offset().top-58,
      },100);
      e.preventDefault();
    });
})