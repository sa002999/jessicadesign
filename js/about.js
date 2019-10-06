
$(function(){
   

// $(window).on("resize",CLEARSTYLE);
// function CLEARSTYLE(){
    // ------RWD???------------
      // if ($(window).innerWidth > 736) {
            
// console.log(window.innerWidth);

    var height = $(window).height();
		

     $(window).scroll(function(){
         var wScroll = $(this).scrollTop();
         // console.log(wScroll);

         if ( wScroll > $('.p02').offset().top- height/2){
            $('.p02').addClass('p02show');
        };

        if (wScroll > $('.p03').offset().top- height){
            $('.p03').addClass('p03show');
        };

        if ( wScroll >  $('.Tbg01').offset().top- height/2){
            $('.Tbg01').addClass('Tbg01show');
        } else {
            $('.Tbg01').removeClass('Tbg01show');
        };

        if ( wScroll >  $('.Tbg02').offset().top- height/2){
            $('.Tbg02').addClass('Tbg02show');
        } else {
            $('.Tbg02').removeClass('Tbg02show');
        };

         if ( wScroll >  $('.bgimg02').offset().top- height/2){
            $('.bgimg02').addClass('bgimg02show');
        } else {
            $('.bgimg02').removeClass('bgimg02show');
        };

        if ( wScroll >  $('.member').offset().top- height){
            $('.member').addClass('memshow');
        };

        if (wScroll >  $('.p04').offset().top- height/2){
            $('.p04').addClass('p04show');
            $('.p05').addClass('p05show');
        };

        if ( wScroll >  $('.contact').offset().top- height){
            $('.contact').addClass('contactshow');
        };

        if ( wScroll >  $('footer').offset().top- height){
            $('.TopTop').addClass('TopTopUp');
            $('.stick').addClass('stickMove');
            $('.arrow').addClass('arrowMove');
        } else {
            $('.TopTop').removeClass('TopTopUp');
            $('.stickMove').removeClass('stickMove');
            $('.arrow').removeClass('arrowMove');
        };

    });

    $('.TopTop').click(function(){
      event.preventDefault();
      $('html,body').animate({scrollTop:0},1500);

      });


     // }
     //    else {
           

     //    }
        // }


	});
