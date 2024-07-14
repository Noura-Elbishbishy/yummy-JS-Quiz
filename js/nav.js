$(document).ready(function() {
  const navIcon = document.getElementById('navIcon');
  const navContent = document.querySelector('.nav-content');
  const iconClassVisible = 'fa-times';
  const iconClassHidden = 'fa-bars';

  $('aside').on('click', function() {
    if ($(navContent).hasClass('show')) {
      $(navContent).removeClass('show');
      $('aside').css('transform', 'translateX(0)');
      navIcon.classList.remove(iconClassVisible);
      navIcon.classList.add(iconClassHidden);
    } else {
      $(navContent).addClass('show');
      $('aside').css('transform', 'translateX(180px)');
      navIcon.classList.remove(iconClassHidden);
      navIcon.classList.add(iconClassVisible);
    }
  });

  $('.nav-content .closebtn').on('click', function() {
    $(navContent).removeClass('show');
    $('aside').css('transform', 'translateX(0)');
    navIcon.classList.remove(iconClassVisible);
    navIcon.classList.add(iconClassHidden);
  });
});
