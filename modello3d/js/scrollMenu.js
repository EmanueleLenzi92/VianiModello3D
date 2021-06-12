
function scroll_to(idScroll, idMenu) {
  $('html,body').animate({
    scrollTop: $('#'+idScroll).offset().top -50
  },'slow');
  
  $(".liMenu").removeClass("active")
  $( "#" + idMenu ).addClass( "active" )
  
}