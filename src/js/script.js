// JavaScript Document

var itemHeights = [];
var returnHeight;

$(function(){
  $(".grad-item").each(function(){ //ターゲット(縮めるアイテム)
    var thisHeight = $(this).height(); //ターゲットの高さを取得
    itemHeights.push(thisHeight); //それぞれの高さを配列に入れる
    $(this).addClass("is-hide"); //CSSで指定した高さにする
    returnHeight = $(this).height(); //is-hideの高さを取得
  });
});

$(".grad-trigger").click(function(){ //トリガーをクリックしたら
  if(!$(this).hasClass("is-show")) {
    var index = $(this).index(".grad-trigger"); //トリガーが何個目か
    var addHeight = itemHeights[index]; //個数に対応する高さを取得
    $(this).addClass("is-show").next().animate({height: addHeight},200).removeClass("is-hide"); //高さを元に戻す
  } else {
    $(this).removeClass("is-show").next().animate({height: returnHeight},200).addClass("is-hide"); //高さを制限する
  }
});



	
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});
	


$(function(){
 
  $('a.boxer').boxer();
});


$(function(){
    $(window).scroll(function (){
        $('.fadeIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});


//
$('a[href^="#"]').click(function() {
   var speed = 300;
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({scrollTop:position}, speed, 'swing');
   return false;
});

