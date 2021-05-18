$('.about-us__button').click(function() {
  $('.about-us__text--below').slideToggle();
  if ($('.about-us__button').text() == "Read more") {
    $(this).text("Less")
  } else {
    $(this).text("Read more")
  }
});