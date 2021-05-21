$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color':'#0000FF',
      'height':'100px',
      'width':'200px'
    }).slideUp(5000);
  });
});
// slideUp()の第一引数に数字を入れると速さを変えられる

