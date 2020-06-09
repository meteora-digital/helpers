function parentWithClass(el, className) {
  var parent = el.parentNode;

  while (!parent.classList.contains(className)) {
    parent = parent.parentNode;
  }

  return parent;
}

module.exports = parentWithClass;