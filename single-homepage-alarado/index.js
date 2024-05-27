$('.nav-bar__theme-btn').click(function () {
  $('html').toggleClass('dark-mode');

  console.log(localStorage.getItem('theme') === 'dark');
  localStorage.getItem('theme') === 'dark'
    ? localStorage.setItem('theme', 'light')
    : localStorage.setItem('theme', 'dark');
});

const checkDarkMode = () => {
  if (localStorage.getItem('theme') === 'dark') {
    $('html').addClass('dark-mode');
  } else {
    $('html').removeClass('dark-mode');
  }
};
checkDarkMode();

$('.nav-bar-burger').click(function () {
  $(this).toggleClass('open');
  $('.nav-bar__list-container').toggleClass('open');
  
});
