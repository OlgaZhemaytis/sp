// external js: masonry.pkgd.js

$('.grid').packery({
  itemSelector: '.grid-item'
});




$('.clients__slaide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true
});

$(document).ready(function(){
  $('.progectslaide__slaide').slick();
});
  
$(document).ready(function(){
  $('.reviews__slaide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  });

});
  

$(document).ready(function () {
 
  var show = true;
  var countbox = ".benefits__inner";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 10 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.benefits__number').css('opacity', '1');
          $('.benefits__number').spincrement({
              thousandSeparator: "",
              duration: 10000,
              
          });
           
          show = false;
      }
  });

});

new WOW().init();
  


$("a[href^='#up']").on( click, function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});


$(".ripple").on("click",function(event){
  $(this).append("<span class='ripple-effect'>");
  $(this).find(".ripple-effect").css({
     left:event.pageX-$(this).position().left,
      top:event.pageY-$(this).position().top
    }).animate({
      opacity: 0,
    }, 1500, function() {
     $(this).remove();
    });
  });
