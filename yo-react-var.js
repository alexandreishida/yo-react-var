var YoReactVar = function(value) {
  var value = value;
  var listeners = [];

  this.get = function() {
    this.addListener(YoTracker.currRunnable);
    return value;
  };
  
  this.set = function(newValue) {
    value = newValue;
    this.fireListeners();
  };

  this.addListener = function(listener) {
    listeners.push(listener);
  };

  this.fireListeners = function() {
    for(i in listeners) {
      listeners[i].call();
    }
  };
};

var YoTracker = {
  currRunnable: null,
  autorun: function(runnable) {
    this.currRunnable = runnable;
    runnable.call();
  }
};
