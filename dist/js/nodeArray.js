function nodeArray(nodeList) {
  var array = [];

  for (var i = 0; i < nodeList.length; i++) {
    array.push(nodeList[i]);
  }

  return array;
}

module.exports = nodeArray;