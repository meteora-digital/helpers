function attach(el, event, func, delay = false) {
  let throttle = false; // not throttled
  let debounce = false; // holder debounce

  func(); // initialise function before adding event handlers

  const attachment = (e) => {
    if (delay) {
      // throttle
      if (!throttle) {
        throttle = true;
        func(e);
        setTimeout(() => throttle = 0, delay);
      }
      // debounce
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        func();
      }, delay);
    } else {
      func();
    }
  }

  event.split(' ').forEach((type) => {
    el.addEventListener(type, (e) => attachment(e));
  })

}

module.exports = attach;