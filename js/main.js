$('.nav-toggle').on('click', function (e) {
  e.preventDefault();
  $('.nav-items').toggleClass('open');
  $('.nav-toggle').toggleClass('open');
});

$('.nav-items a').on('click', function () {
  $('.nav-items').toggleClass('open');
  $('.nav-toggle').toggleClass('open');
});

//Current state in navigation
$('#nav').onePageNav({
  currentClass: 'current',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
  begin: function() {
    //I get fired when the animation is starting
  },
  end: function() {
    //I get fired when the animation is ending
  },
  scrollChange: function($currentListItem) {
    //I get fired when you enter a section and I pass the list item of the section
  }
});
