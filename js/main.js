
$('.partners-slider').owlCarousel({
      nav: true,
      slideSpeed: 4300,
      paginationSpeed: 4400,
      loop: true,
      dots: true,
      center: false,
      mouseDrag: false,

      navText: ["", ""],
      navClass: ['owl-prev', 'owl-next'],
      responsive : {
        0 : {
           items: 1
        },
        360 : {
            items: 2
        },
        480 : {
            items: 3
        },
        768 : {
            items: 4
        },
        1024 : {
            items: 6
        }
    }
      
  });
 $( ".owl-prev").html('<i class="fas fa-angle-left"></i>');
 $( ".owl-next").html('<i class="fas fa-angle-right"></i>');



//tabs
$(".tabs-content__item").not(":first").hide();
$(".tabs .tabs-list__item").click(function() {
  $(".tabs .tabs-list__item").removeClass("active").eq($(this).index()).addClass("active");
  $(".tabs-content__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

//lef-menu
$('.sub-menu ul').hide();
$(".sub-menu .sub-menu__link").click(function(e){
    e.preventDefault();
});
$(".sub-menu .sub-menu__link").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});


//catalog list|tab view

$('.sub-cat__filter-view_list').click(function(){
  $('.sub-cat__filter-view_tab').removeClass('active');
  $(this).addClass('active');
//   $('.products_block').removeClass('view-row_block');
  $('.sub-cat__list').addClass('active');
})
$('.sub-cat__filter-view_tab').click(function(){
  $('.sub-cat__filter-view_list').removeClass('active');
  $(this).addClass('active');
  $('.sub-cat__list').removeClass('active');
//   $('.products_block').addClass('view-row_block');
})

/*Запускаем submit на форме фильтра при изменении значения*/
$(function () {

  var selects = document.querySelectorAll('.sort-choice');
  var filter = document.querySelector('#filter');
  if (selects.length) {

    Array.prototype.forEach.call(selects, function (el) {
      el.addEventListener('change', function () {
        filter.submit();
      })
    })
  }

});

$('.popup__form').submit(function() {
 $.fancybox.close();
});

$(document).ready(function(){
  $('.phone-mask').mask('+7(999) 999-99-99');
})


$(".bottom-header__hamburger").on('click',function() {
    $(this).toggleClass("active");
    $('.main-nav-wrp').toggleClass("active");
    $('body').toggleClass("fixed");
});

$(window).resize(function() {
  if ( $(window).width() < 768 ) {
    var touch = $('#touch-nav');
    var menu = $('.nav');

    $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  }
});

//Вид айтемов в каталоге при резайзе менее 528

function Resize() {
    if($(window).width() < 528)
    {   
        $('.sub-cat__list').removeClass('active');
    }
    else
    {
        $('.sub-cat__list').addClass('active');
    }
}

Resize();

$(window).resize(function() {
    Resize();
});


//ГОСТы и ТУ

$(function () {
  $(".bold1").click(function () {
    $(".gostPageContent").removeClass('sub_aktive');
    $(this).parent().addClass('sub_aktive');
    $(this).parent().next().slideUp();
    if ($(this).parent().next().is(":visible")) {
      $(this).parent().next().slideUp();
      $(this).removeClass('active'); 
    } else {   
      $(this).parent().next().slideToggle();
      $(this).addClass('active');    
    }
  });
});

//Кнопка "подробнее" в сео-блоке


$('.btn__show-more').on('click', function(e) {
    e.preventDefault();
    $('.hidden-text__gradient').toggleClass("hidden");
    $('.hidden-text').slideToggle(function() {
        
        $(e.target).text($(this).is(':visible') ? 'Свернуть' : 'Подробнее');
    });
});