$(function() {

  // NAVIGATION

  $('.mobile-menu').click(function(e) {
    $('.menu-mobile').slideDown();
    e.preventDefault();
  });

  $('.close-menu').click(function(e) {
    $('.menu-mobile').slideUp();
    e.preventDefault();
  });

  // SLIDER

  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    infinite: true,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  // PAGE CONTACT
      
  var theForm = document.getElementById( 'theForm' );
  
  new stepsForm( theForm, {
    onSubmit : function( form ) {
      // hide form
      classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

      /*
      form.submit()
      or
      AJAX request (maybe show loading indicator while we don't have an answer..)
      */

      // let's just simulate something...
      var messageEl = theForm.querySelector( '.final-message' );
      messageEl.innerHTML = 'Merci ! Je vous réponds au plus vite.';
      classie.addClass( messageEl, 'show' );
    }
  });

  // FILTRER LES PRESTATIONS

  $('.filtres a').click(function(e) {
        $('.filtres a').removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');
        var filtre = href.substring(1, href.length);
        //alert(filtre);
        $('.projet').hide();
        if(filtre == 'all') {
            $('.projet').show();
        } else {
            $('.projet[data-filtre="' + filtre + '"]').show();
        }
        e.preventDefault();
  });


});