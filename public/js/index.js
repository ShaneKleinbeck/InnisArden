'use strict';

console.log('CONNECTED');

var photos = ['/public/media/award1.jpg', '/public/media/award2.jpg', '/public/media/award3.jpg', '/public/media/live-music.jpg', '/public/media/theStore1.jpg', '/public/media/theStore2.jpg', '/public/media/theStore3.jpg', '/public/media/theStore4.jpg'];

$(document).ready(function(){

  // Implement gallery
  for(var i = 0; i < photos.length; i++){
    $('.galleryGrid').append('<div class="col-xs-6 col-sm-3"><a href="" data-toggle="modal"><img src="' + photos[i] + '" alt="" class="gridImg"></a></div>');
  }

  // Toggle Form
  var formCount = 0;
  $('#toggleInput').click(function(){
    console.log('formToggled');
    formCount++;
    if(formCount % 2 === 0){
      $('.jumbotron').css({"display": "none"});
    } else {
      $('.jumbotron').css({"display": "block"});     
    }
  });


  // Smooth Scroll Functionality
  smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)ßß
      selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  // Hide Brand When Scrolling Past Banner Page
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var height = document.documentElement.clientHeight * .7;
    if(scroll > height){
      $('.video-brand').css({"display": "none"});
    } else {
      $('.video-brand').css({"display": "block"});
    }
  })

  // Toggle Exit Animation For Button Nav
  $('#menu-logo').click(function(){
    $('.hide-overlay').toggleClass('video-nav-overlay');
  });
  $('.overlay-nav').click(function(){
    $('.hide-overlay').toggleClass('video-nav-overlay');
  })
});




