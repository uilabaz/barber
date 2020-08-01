// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
  var last_scroll_top = 0;
  $(window).on('scroll', function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
    }
    else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;
  });
}





/******NAVBAR ANIMATION****/

$(document).ready(function () {

  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });

});




/*SCROLL TOP*/



$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 100);
  });
});








/*********CARD BUTTON*********/

/*****Btn3********/

$(document).ready(function () {
  $(".btn3").mouseenter(function () {
    $(".card-box1").hover().css({ "transform": "rotate(45deg)" }, { "background-color": "#DCA33E" })
  });


  $(".btn3").mouseout(function () {
    $(".card-box1").hover().css("transform", "rotate(0deg)")
  });



});




/*****Btn4********/

$(document).ready(function () {
  $(".btn4").mouseenter(function () {
    $(".card-box2").hover().css({ "transform": "rotate(45deg)" }, { "background-color": "#DCA33E" })
  });


  $(".btn4").mouseout(function () {
    $(".card-box2").hover().css("transform", "rotate(0deg)")
  });



});



/*****Btn5********/

$(document).ready(function () {
  $(".btn5").mouseenter(function () {
    $(".card-box3").hover().css({ "transform": "rotate(45deg)" }, { "background-color": "#DCA33E" })
  });


  $(".btn5").mouseout(function () {
    $(".card-box3").hover().css("transform", "rotate(0deg)")
  });



});

/*****Btn6********/

$(document).ready(function () {
  $(".btn6").mouseenter(function () {
    $(".card-box4").hover().css({ "transform": "rotate(45deg)" }, { "background-color": "#DCA33E" })
  });


  $(".btn6").mouseout(function () {
    $(".card-box4").hover().css("transform", "rotate(0deg)")
  });



});

/*********************CURSOR********************/

(function()
{
  var cursor = document.querySelector('.cursor');
  var cursorLazy = document.querySelector('.cursor-lazy');
  var links = document.querySelectorAll('a');

  var editCursor = function editCursor(event)
  {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
    cursorLazy.style.left = event.clientX + 'px';
    cursorLazy.style.top = event.clientY + 'px';
  };
  window.addEventListener('mousemove',editCursor);


})();  