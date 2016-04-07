'use strict';
const  Counter = require('./Counter.js'),
  store = require('./store');

let counter;

require('./style.styl');

window.onload = function (){
  document.body.innerHTML = require('./index.jade')();
  counter = new Counter({
    el: document.getElementById('counter'),
    store
  });
  counter.render();
}
