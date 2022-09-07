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

  // Page contact
      
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
  } );

});