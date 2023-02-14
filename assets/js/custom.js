
$(document).ready(function() {
    function menuscroll() {
        let navmenu = $("#img-logo");
        if($(window).scrollTop() > 150) {          
            navmenu.css({'width':'150px'});
        } else {
            navmenu.css('width','400px');            
        }
    }

    menuscroll();
    $(window).on('scroll' , menuscroll);

        

    gsap.from(".cards",1, {
      delay: 1.4, //can reference any properties that the author decides - in this case "direction".
      opacity: 0,
      y:20,
      ease:Expo.easeInOut
   }); 


  //  $(".owl-carousel").owlCarousel({
  //   // items:6,
  //   dots:false,
  //   nav:true,
  //   // autoWidth:false,  
  //   // navContainer:'.nav-owl-c',
  //   // loop:true,
  //   margin:20,
  //   // autoplay:true,
  //   autoplayTimeout:1000,
  //   autoplayHoverPause:true,
  //   responsive:{
  //       0:{
  //           items:1,
  //           nav:true
  //       },
  //       600:{
  //           items:2,
  //           nav:false
  //       },
  //       800:{
  //           items:3,
  //           nav:false
  //       },
  //       1000:{
  //           items:4,
  //           nav:true,
  //           loop:false
  //       }
  //   }
  // });
  



  $('.slider-top').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    infinite: false,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  $('.most-viewed').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    infinite: false,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              // slidesToScroll: 1,
              infinite: true,
              // dots: true
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  $('.category-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              // slidesToScroll: 1,
              infinite: true,
              // dots: true
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  $("#basket-top").hover(function(){
    $("#basket-top ").addClass("border-bottom");
    $("#basket-top ").addClass("border-2");
    $("#basket-top .basket").fadeIn(200);     
  });
  $("#basket-top").mouseleave(function(){
    $("#basket-top ").removeClass("border-bottom");
    $("#basket-top ").removeClass("border-2");
    $("#basket-top .basket").fadeOut(200); 
  });
 
  $("#input-top").hover(function(){
    $("#input-top ").addClass("border-bottom");
    $("#input-top ").addClass("border-2");
    $("#input-top .input").fadeIn(200);     
  });
  $("#input-top").mouseleave(function(){
    $("#input-top ").removeClass("border-bottom");
    $("#input-top ").removeClass("border-2");
    $("#input-top .input").fadeOut(200); 
  });



  $(function() {
      function initButtons() {
          $(document).on("click", ".js-button", function() {
              var $this = $(this);
              var popup = $.goodpopup.getPopup($this.data("popupContent"));

              popup.setOptions({
                hasCloseButton:true,
                  data: $.extend({}, popup.getOptions().data, {
                      name: $this.text(),                                        
                  }),                  
              }).open();
          });
      }

      function initCallbacks() {
          function callback(event_name) {
              if (typeof console !== "undefined" && typeof console.log === "function") {
                  console.log(this.getPopupId() + ": " + event_name);
              }
          }

          $.each($.goodpopup.getPopups(), function(popup_name, popup_instance) {
              popup_instance.instance.setOptions({
                  callbackBeforeOpen: function() {
                      callback.call(popup_instance.instance, "callbackBeforeOpen");
                  },
                  callbackAfterOpen: function() {
                      callback.call(popup_instance.instance, "callbackAfterOpen");
                  },
                  callbackBeforeClose: function() {
                      callback.call(popup_instance.instance, "callbackBeforeClose");
                  },
                  callbackAfterClose: function() {
                      callback.call(popup_instance.instance, "callbackAfterClose");
                  }
              });
          });
      }

      initButtons();
      initCallbacks();
  });

  $("#menu-bar span").hover(function(){
    $(this).addClass("border-bottom");
    $(this).addClass("border-2");
    $(this).addClass("border-primary");
  });
  $("#menu-bar span").mouseleave(function(){
    $(this).removeClass("border-bottom");
    $(this).removeClass("border-3");
    $(this).removeClass("border-primary");
  });


  (function($) {
    $.fn.tab = function(options) {
      var opts = $.extend({}, $.fn.tab.defaults, options);
      return this.each(function() {
        var obj = $(this);
  
        $(obj).find('.tabHeader li').on(opts.trigger_event_type, function() {
          $(obj).find('.tabHeader li').removeClass('active');
          $(this).addClass('active');
  
          $(obj).find('.tabContent div.tabItem').hide();
          $(obj).find('.tabContent div.tabItem').eq($(this).index()).show();
        })
      });
    }
    $.fn.tab.defaults = {
      trigger_event_type: 'click', //mouseover | click 默认是click
    };
  
  })(jQuery);

  $('.tab1').tab({
    trigger_event_type: 'mouseover'
  });

  $('.tab2').tab({
    trigger_event_type: 'click'
  });

  $("#categories").hover(function(){
    // $("#categories").removeClass("d-none");
    $("#menu-bar .categories").fadeIn(300);
    // alert("vrdb");
  });

  $("#categories").mouseleave(function(){
    // $("#categories").removeClass("d-none");
    $("#menu-bar .categories").fadeOut(300);
    // alert("vrdb");
  });


  $(".specifications .specification-plus").click(function(){
      $(".specifications ul").toggleClass("visible-specification");
  });

  // $('#slider-container').thumb_slider();


      $('#my_thumb_slider').thumb_slider();



     





  });

  $(function(){
  var slider = $('#slider');
  var sliderWrap = $('#slider ul');
  var sliderImg = $('#slider ul li');
  var prevBtm = $('#sliderPrev');
  var nextBtm = $('#sliderNext');
  var length = sliderImg.length;
  var width = sliderImg.width();
  var thumbWidth = "80px";

  sliderWrap.width(width*(length+2));

  //Set up
  slider.after('<div id="' + 'pager' + '"></div>');
  var dataVal = 1;
  sliderImg.each(
    function(){
      $(this).attr('data-img',dataVal);
      $('#pager').append('<a data-img="' + dataVal + '"><img src=' + $('img', this).attr('src') + ' width=' + thumbWidth + '></a>');
    dataVal++;
  });
  
  //Copy 2 images and put them in the front and at the end
  $('#slider ul li:first-child').clone().appendTo('#slider ul');
  $('#slider ul li:nth-child(' + length + ')').clone().prependTo('#slider ul');

  sliderWrap.css('margin-left', - width);
  $('#slider ul li:nth-child(2)').addClass('active');

  var imgPos = pagerPos = $('#slider ul li.active').attr('data-img');
  $('#pager a:nth-child(' +pagerPos+ ')').addClass('active');


  //Click on Pager  
  $('#pager a').on('click', function() {
    pagerPos = $(this).attr('data-img');
    $('#pager a.active').removeClass('active');
    $(this).addClass('active');

    if (pagerPos > imgPos) {
      var movePx = width * (pagerPos - imgPos);
      moveNext(movePx);
    }

    if (pagerPos < imgPos) {
      var movePx = width * (imgPos - pagerPos);
      movePrev(movePx);
    }
    return false;
  });

  //Click on Buttons
  nextBtm.on('click', function(){
    moveNext(width);
    return false;
  });

  prevBtm.on('click', function(){
    movePrev(width);
    return false;
  });

  //Function for pager active motion
  function pagerActive() {
    pagerPos = imgPos;
    $('#pager a.active').removeClass('active');
    $('#pager a[data-img="' + pagerPos + '"]').addClass('active');
  }

  //Function for moveNext Button
  function moveNext(moveWidth) {
    sliderWrap.animate({
        'margin-left': '-=' + moveWidth
        }, 500, function() {
          if (imgPos==length) {
            imgPos=1;
            sliderWrap.css('margin-left', - width);
          }
          else if (pagerPos > imgPos) {
            imgPos = pagerPos;
          } 
          else {
            imgPos++;
          }
          pagerActive();
      });
  }

  //Function for movePrev Button
  function movePrev(moveWidth) {
    sliderWrap.animate({
        'margin-left': '+=' + moveWidth
        }, 500, function() {
          if (imgPos==1) {
            imgPos=length;
            sliderWrap.css('margin-left', -(width*length));
          }
          else if (pagerPos < imgPos) {
            imgPos = pagerPos;
          } 
          else {
            imgPos--;
          }
          pagerActive();
      });
  }






  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "61px";
    } else {
      document.getElementById("navbar").style.top = "13px";
    }
    prevScrollpos = currentScrollPos;
  }


  // window.onscroll = function() {myFunction()};
    var header = document.getElementById("tabHeader");
    var footer = document.getElementById("footer");
    var sticky = header.offsetTop;   
  

  $(window).scroll(function myFunction() {  
    var stickyfooter = footer.offsetTop;          
    if(window.pageYOffset > (stickyfooter - 130)){
      header.classList.remove('sticky');
      // alert('sfs');
      return;
    }
    if (window.pageYOffset > sticky ) {
      header.classList.add("sticky");
   
    } else if (window.pageYOffset < sticky) {
      header.classList.remove("sticky");
    }

    // if(window.pageYOffset == 6066){
    //   // header.classList.remove('sticky');
    //   alert('sfs');
    // }
  });
  

});