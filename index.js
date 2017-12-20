var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(function(){

  //SIDE-MENU CODE
  var $offset = $('.menu-icon').offset();
  var $win = $(window);
  $win.scroll(function() {
    if ($win.scrollTop() >= ($offset.top - 110)) {
      $('.menuContainer').css({'position': 'fixed', 'top': '110px'});
    } else {
      $('.menuContainer').css({'position': 'relative', 'top': 0});
    }
  });

  $('.menu-icon').on('click', function(){
    var $bar = $('.menu-bar');
    if ($bar.hasClass('is-active')) {
      $bar.removeClass('is-active')
    } else {
      $bar.addClass('is-active');
    }
  });

  $('#drop').on('click', function(){
    var $bar = $('.insideMenu');
    if ($bar.hasClass('is-active')) {
      $bar.removeClass('is-active');
      $(this).removeClass('fa-sort-asc');
      $(this).addClass('fa-sort-desc');
    } else {
      $bar.addClass('is-active');
      $(this).removeClass('fa-sort-desc')
      $(this).addClass('fa-sort-asc');
    }
  });

  //FORM VALIDATION CODE
  var $btn = $('.btn');
  var $info = $('.info');
  var $user = $('#inputUser');
  var $pass = $('#inputPassword');
  var $email = $('#inputEmail');

  $btn.on('click', function (e) {
    e.preventDefault();
    if ($user.val().length == 0 || $pass.val().length == 0 || $email.val().length == 0) {
      $info.empty();
      $info.append("<h1>Popunite sva polja!</h1>");
    } else if (!($email.val().match(/\S+@\S+\.\S+/))) {
      $info.empty();
      $info.append("<h1>Email nije validan!</h1>");
    } else {
      $info.empty();
      
    }
    $win.scrollTop(($info.offset().top - 110));
  });

  //HEADER MENU TOGGLE
  var $menu = $('.head');
  $menu.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $("#navs").toggleClass('navActive');
  });

  //TO TOP CODE

  var $top = $('.toTop');
  $top.on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({scrollTop:"0"},600);
  });

});