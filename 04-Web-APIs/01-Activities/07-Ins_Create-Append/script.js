// Ins Create Append
// NOTE: No arrow functions or template literals per course constraints.
/* eslint-disable no-var, prefer-var */
(function(){
  'use strict';

  // Wait until DOM is parsed because we loaded with `defer`
  var app = document.getElementById('app');
  if(!app){
    console.error('Missing #app container');
    return;
  }

  var p = document.createElement('p');
  p.textContent = 'Starter loaded for Ins Create Append. Open DevTools → Console.';
  app.appendChild(p);
})();