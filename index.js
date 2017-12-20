//JS SLIDER CODE
/*var slideIndex = 1;
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
  console.log(slides);
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
}*/

//JQUERY SLIDER CODE
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i, slides, dots;
  var slider = $('.slider');
  var dot = $('.dot');
  if (n > slider.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slider.length};
  for (i = 0; i < slider.length; i++) {
    slides = $(slider[i]);
    slides.css('display', 'none');
  };
  for (i = 0; i < dot.length; i++) {
    dots = $(dot[i]);
    dots.removeClass('active');
  };
  slides = $(slider[slideIndex - 1]);
  slides.css('display', 'block');
  dots = $(dot[slideIndex - 1]);
  dots.addClass('active');
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
      $('.formContainer').remove();
      $info.append("<h1>Uspesno logovanje</h1><i class='fa fa-check fa-4x' aria-hidden='true'></i>");
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
  $win.scroll(function () {
    if ($win.scrollTop() >= 500) {
      if ($("#navs").hasClass('navActive')) {
        $("#navs").removeClass('navActive');
      }
    }
  });

  //TO TOP CODE

  var $top = $('.toTop');
  $win.scroll(function () {
    if ($win.scrollTop() >= 1300) {
      $top.show(500);
    } else {
      $top.hide(500);
    }
  });
  $top.on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({scrollTop:"0"},600);
  });

});