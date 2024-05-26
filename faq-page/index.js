$('.faq__question-list__item-accordion').click(function () {
  $(this).toggleClass('open');
  $(this).toggleClass('faq__question-list__item-accordion--open');
});

$('.faq__nav__list__item').click(function () {
  $('.faq__nav__list__item').removeClass('faq__nav__list__item--active');
  $(this).addClass('faq__nav__list__item--active');
});
