$(function() {
  // スムーススクロール
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");  //出発地点取得
    var target= $(href == "#" || href == "" ? 'html' : href);  //到着地点取得
    var position = target.offset().top;  //到着地点をtopからの数値で取得
    $("html,body").animate({scrollTop:position}, 600, "swing");
  });
  
});

$(function() {
  //スクロールイベント
  $(window).scroll(function() {
    $(".scrollIvent").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 50) {
        $(this).addClass("scrollIgnition");
      }
    });
  });
});

$(function() {
  // ハンバーガーメニュー
  $('.l-header-hamburger').on('click', function(){
    hamburger();
  });
  function hamburger() {
    $('.l-header-hamburger').toggleClass('active');    
    if ($('.l-header-hamburger').hasClass('active')) {  //l-header-hamburgerクラスにactiveクラスが存在する場合
      $('.l-header-spMenu').addClass('active');  //l-header-spMenuにもactiveクラスを追加する
    } else {  // hamburgerクラスにactiveクラスが存在しない場合
      $('.l-header-spMenu').removeClass('active');//l-header-spMenuからactiveクラスを削除する
    }
    if ($('.l-header-hamburger').hasClass('active')) {
      $('.l-header').addClass('open');
    } else {
      $('.l-header').removeClass('open');
    }
    $('.l-header-spMenu__link').on('click', function() {
      $('.l-header-hamburger').removeClass('active');
      $('.l-header-spMenu').removeClass('active');
      $('.l-header').removeClass('open');
    });
    $('#mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('.l-header-hamburger').removeClass('active');
      $('.l-header-spMenu').removeClass('active');
      $('.l-header').removeClass('open');
    });
  }
});