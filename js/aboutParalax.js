$(function() {
  $(document).mousemove(function(e) {
    TweenLite.to($('.paraBG'), .5, {
      css: {
        'background-position': parseInt(event.pageX / 12) + "px " + parseInt(event.pageY / 40) + "px, " + parseInt(event.pageX / 19) + "px " + parseInt(event.pageY / 45) + "px, " + parseInt(event.pageX / 35) + "px " + parseInt(event.pageY / 60) + "px"
      }
    });
  });

});