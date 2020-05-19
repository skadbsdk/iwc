$(function(){
  // start submenu event
  $('#submenu_btn,.nav>ul>li:first-child').click(function(){
    var submenuHeight=$('.submenu').height();
    // console.log(submenuHeight);
    var submenuBottom=$('.submenu').css('bottom');
    // console.log(submenuBottom);
    if(submenuBottom=='80px'){
      close_sub_menu();
      $('.submenu').css('bottom','-'+submenuHeight+'px');
      $('.submenu').css('background-color','#ffffff');
    }else{
      $('.submenu').css('bottom','100%');
    }
  }); 

  // start subwatche event
  watchePaddingTop();

  $('#clock_btn').click(function(){
    watchePaddingTop();
  });

  $(window).resize(function(){
    var subwatcheBottom=$('.subwatche').css('bottom');
    if(subwatcheBottom!='80px'){
      watchePaddingTop();
      fsubwatcheBottom();
    }
  });

  $('#clock_btn').click(function(){
    // console.log(submenuHeight);
    var subwatcheBottom=$('.subwatche').css('bottom');
    // console.log(submenuBottom);
    if(subwatcheBottom=='80px'){
      close_sub_menu();
      fsubwatcheBottom();
    }else{
      $('.subwatche').css('bottom','100%');
    }
  });
  function fsubwatcheBottom(){
    var subwatcheHeight=$('.subwatche').height();
    $('.subwatche').css('bottom','-'+subwatcheHeight+'px');
    $('.subwatche').css('background-color','#ffffff');
  }
  function watchePaddingTop(){
    var watchesWidth=$('.watches').width();
    // console.log(watchesWidth);
    $('.watches').css('padding-top',watchesWidth*1.5+'px');
  }

  // start search event
  $('#search_btn').click(function(){
    var tmp=$('.search_form').css('display');
    if(tmp=='none'){
      close_sub_menu();
      $('.search_form').css('display','flex');
      $('#search01').focus();
      var search_form_height=$('.search_form').height();
      $('.banner').css('padding-top',search_form_height);
    }else if(tmp=='flex'){
      $('.search_form').css('display','none');
      $('#search01').blur();
      $('.banner').css('padding-top',0);m
    }
  });
  // start login form event
  $('#login_open_btn').click(function(){
    $('.login_form').show();
    $('#user_id').focus();
  });
  $('#login_close_btn').click(function(){
    $('.login_form').hide();
  });
  $('.iwc_join>ul>li').click(function(){
    $('.iwc_join>ul>li').removeClass('active');
    $(this).addClass('active');
  });
  $('.iwc_join>div>input').focus(function(){
    $('.iwc_join>div>input').prev().removeClass('active');
    $(this).prev().addClass('active');
  });
  $('.iwc_join>div>input').focusout(function(){
    $('.iwc_join>div>input').prev().removeClass('active');
  })
  $('input[value="LOG IN"]').click(function(){
    var userId=$('#user_id').val();
    console.log(userId);
    var userPass=$('#user_pass').val();
    console.log(userPass);
    if(userId=='' || userPass==''){
      $('.iwc_join>div>input').css('border-bottom-color','red');
      $('.iwc_join>div>label').css('color','red');
      $('.iwc_join>div').addClass('active');
      $('#user_id').focus();
    }                  
  });
  // start lang box event
  $('.lang_container>h4').click(function(){
    $(this).next().slideToggle(100);
  });
  $('.lang_container>ul>li').click(function(){
    var natLang=$(this).children().text();
    $(this).parent().prev().text(natLang);
    $(this).parent().slideUp(100);
  });
  $('#lang_btn').click(function(){
    $('.lang_box').toggle();
    $('.rotate_sim').toggleClass('active');
  });

  // start close function
  function close_sub_menu(){
    $('.submenu').css('bottom','100%');
    $('.subwatche').css('bottom','100%');
    $('.search_form').css('display','none');      
  }
})