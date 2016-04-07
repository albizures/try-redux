const redux = require('redux'),
  counter = require('./reducers/counter.js');


module.exports = redux.createStore(counter);
