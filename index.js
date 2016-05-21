'use strict';

const Node = require('./node');

class LinkedList {
  constructor () {
    this.head = null;
  }

  append(node){
    this.head = node;
  }
}

module.exports = LinkedList;

// Be a able to add stuff to the list
// Append
// Prepend
// Put in the middle
// Be able to check if a thing is on the list
// Get the length of list
// Remove a node from the list
