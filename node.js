'use strict';

class Node {
  constructor(data) {
    this.data = data || {};
    this.nextNode = null;
  }
}

module.exports = Node;
