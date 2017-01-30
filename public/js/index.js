'use strict';

console.log('CONNECTED');

$(document).ready(function(){
  // Smooth Scroll Functionality
  smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
      selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  // Hide Brand When Scrolling Past Banner Page
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var height = document.documentElement.clientHeight * .95;
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


