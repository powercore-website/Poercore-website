$('.nav-toggle').on('click', function (e) {
  e.preventDefault();
  $('.nav-items').toggleClass('open');
  $('.nav-toggle').toggleClass('open');
});

$('.nav-items a').on('click', function () {
  $('.nav-items').toggleClass('open');
  $('.nav-toggle').toggleClass('open');
});

// Smooth Scroll

$(document).ready(function(){
 $('.smooth-scroll, .smooth-scroll a').on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
       window.location.hash = hash;
     });
   }
 });
});
