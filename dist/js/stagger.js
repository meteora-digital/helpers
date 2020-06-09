function stagger(arrayOfElements, func) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var setDelay = delay;

  for (var i = 0; i < arrayOfElements.length; i++) {
    func(arrayOfElements[i], delay);
    delay += setDelay;
  }
}

module.exports = stagger;