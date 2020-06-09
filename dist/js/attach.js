function attach(el, event, func, userdelay) {
  var throttle = false; // not throttled

  var debounce = false; // holder debounce

  var delay = userdelay || false;
  func(); // initialise function before adding event handlers

  var attachment = function attachment(e) {
    if (delay) {
      // throttle
      if (!throttle) {
        throttle = true;
        func(e);
        setTimeout(function () {
          return throttle = 0;
        }, delay);
      } // debounce


      clearTimeout(debounce);
      debounce = setTimeout(function () {
        func();
      }, delay);
    } else {
      func();
    }
  };

  event.split(' ').forEach(function (type) {
    el.addEventListener(type, function (e) {
      return attachment(e);
    });
  });
}

module.exports = attach;