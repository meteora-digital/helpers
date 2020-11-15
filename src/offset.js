function offset(el) {
  let offset = {
    x: 0,
    y: 0,
  };

  while(el) {
    offset.y += el.offsetTop;
    offset.x += el.offsetLeft;
    el = el.offsetParent;
  }

  return offset;
}

exports.offset = offset;