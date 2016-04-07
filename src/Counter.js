const increment = require('./actions/increment.js'),
  decrement = require('./actions/decrement.js'),
  store = require('./store.js');

module.exports =  class Counter {
  constructor(options) {
    this.$el = options.el;
    this.store = options.store;
    store.subscribe(this.update.bind(this));
    this.$el.querySelector('#inc').addEventListener('click', this.inc.bind(this));
    this.$el.querySelector('#dec').addEventListener('click', this.dec.bind(this));
  }

  inc() {
    this.store.dispatch(increment())
  }

  dec() {
    this.store.dispatch(decrement())
  }

  update() {
    console.log(store.getState());
    this.$el.querySelector('#text').innerHTML = store.getState();
  }

  render() {
    this.update();
  }
};
