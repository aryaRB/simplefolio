import initTilt from './js/tilt';
import initSr from './js/sr';
import Typed from 'typed.js';

import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();
// Can also be included with a regular script tag

var typed = new Typed('#typed',{
  stringsElement: '#typed-strings',
  backSpeed: 40,
  typeSpeed: 40
});