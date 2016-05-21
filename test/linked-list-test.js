const assert = require('assert');
const linkedList  = require('../index');
const Node  = require('../node');

describe('linkedList', function () {
  it('should exist', function() {
    assert(linkedList);
  });

  it('should be a function', function() {
    assert.strictEqual(typeof linkedList, 'function');
  });

  it('should have a head', function() {
    list = new linkedList();
    assert.strictEqual(list.head, null);
  });

  it('should add a new linked list', function() {

  });

});

describe('Node', function () {
  it('should exist', function() {
    assert(Node);
  });

  it('should have a value', function(){
    node = new Node(1);
    assert.strictEqual(node.data, 1);
  });

  it('should have a next node', function(){
    node = new Node(1);
    assert.strictEqual(node.nextNode, null);
  });
});
