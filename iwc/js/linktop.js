$(function(){
  $(document).scroll(function(){
    var docTop=$(document).scrollTop();
    if(docTop>=80){
      $('#link_top').addClass('active');
      $('.header>.content1').slideUp(300);
    }else{
      $('#link_top').removeClass('active');
      $('.header>.content1').slideDown(300);
    }
  });
})