function getTransformValues(el) {
  var matrix = window.getComputedStyle(el).transform; // Remove the brackets and matrix strings

  var transformValues = matrix.replace('matrix(', '').replace(')', '');
  var transformArray = transformValues.split(',');
  return {
    scaleX: parseFloat(transformArray[0]),
    skewY: parseFloat(transformArray[1]),
    skewX: parseFloat(transformArray[2]),
    scaleY: parseFloat(transformArray[3]),
    translateX: parseFloat(transformArray[4]),
    translateY: parseFloat(transformArray[5])
  };
}

module.exports = getTransformValues;