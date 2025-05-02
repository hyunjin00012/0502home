$(".lang").hide();
$(".gnb>li:last-child").mouseover(function(){
 $(".lang").show();
})
$(".lang").mouseout(function(){
 $(".lang").hide();
})
 /*
   if - 조건문
   if (조건){
    참값(조건에 만족했을때 수행할 내용)
   }else{
    거짓의 값(조건에 만족하지 않았을때 수행할 내용)
   }

 */

$(window).scroll(function(){
 let i=$("html").scrollTop();
 if (i>=20){
  $(".nav").addClass("fixed")
 }else{
  $(".nav").removeClass("fixed")
   }

})

$(".sub,.sub_bg").hide();
$(".menu>li").mouseover(function(){
  $(".sub,.sub_bg").stop().fadeIn(100);
})
$(".menu>li").mouseout(function(){
  $(".sub,.sub_bg").stop().fadeOut(100);
})

$(".m_nav_bg").hide();
$(".m_btn").click(function(){
  $(".m_nav_bg").fadeIn(300);
  $(".m_nav").addClass("m_nav_active")

})
$(".m_close,.m_nav_bg_box").click(function(){
  $(".m_nav_bg").fadeOut(300);
  $(".m_nav").removeClass("m_nav_active");
})


$(".m_sub").hide();
$(".m_menu>li").click(function(){
  $(this).children(".m_sub").slideToggle();
  $(this).siblings().children(".m_sub").slideUp();
  $(this).toggleClass("m_menu_active");
  $(this).siblings().removeClass("m_menu_active")
})

/* swiper */
const main=new Swiper(".main",{
  loop:true,//순환여부
  navigation:{prevEl:'.btn_prev', nextEl:'.btn_next'},
  pagination:{el:'.main .swiper-pagination', clickable:true},
  autoplay: {
    delay: 2500, //다음 슬라이드 전환 시간 1000=1초
    disableOnInteraction: false,
  },

})

$(".main_play").hide();
$(".main_pause").click(function(){
  $(".main_pause").hide();
  $(".main_play").show();
  main.autoplay.stop() // autoplay 정지
})
$(".main_play").click(function(){
  $(".main_pause").show();
  $(".main_play").hide();
  main.autoplay.start() // autoplay 시작
})


const box1Slide=new Swiper('.box1',{
  loop:true,
  autoplay:{delay:2600,disableOnInteraction: false,},
  navigation:{prevEl:'.box1_prev', nextEl:'.box1_next'},
  pagination:{el:'.box1 .swiper-pagination', type:'fraction'}
})

$(".box1_play").hide();
$(".box1_pause").click(function(){
  $(".box1_pause").hide();
  $(".box1_play").show();
  box1Slide.autoplay.stop();
})
$(".box1_play").click(function(){
  $(".box1_pause").show();
  $(".box1_play").hide();
  box1Slide.autoplay.start();
})

$(".notice2").hide();
$(".tab_title>li:nth-child(2)").click(function(){
  $(".notice2").show();
  $(".notice1").hide();
  $(this).addClass("active");
  $(this).siblings().removeClass("active")
})
$(".tab_title>li:nth-child(1)").click(function(){
  $(".notice1").show();
  $(".notice2").hide();
  $(this).addClass("active");
  $(this).siblings().removeClass("active")
})

$(".family_list").hide();
$(".family>li").mouseover(function(){
  $(this).children(".family_list").stop().show();
})
$(".family>li").mouseout(function(){
  $(this).children(".family_list").stop().hide();
})