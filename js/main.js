$('.nav-toggle').on('click', function (e) {
  e.preventDefault();
  $('.nav-items').toggleClass('open');
  $('.nav-toggle').toggleClass('open');
});

$('.nav-items a').on('click', function () {
  $('.nav-items').toggleClass('open');
  $('.nav-toggle').toggleClass('open');
});
