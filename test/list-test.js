/*globals describe, it, beforeEach, afterEach */
/*jshint maxstatements:false */
'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('assert');
var List = require('../lib/list');

  function $(selector, context) {
    context = context || document;
    return context.querySelectorAll(selector)
  }

  function prepareParams(params) {
    if (!params.items) {
      params.items = ['a', 'b', 'c'];
    }

    return params;
  }

  describe('component', function(){

    var div;
    var comp;

    function render(params) {
      comp = React.render(React.createElement(List,
        prepareParams(params)), div);
    }

    beforeEach(function () {
      div = document.createElement("div");
    });

    afterEach(function () {
      if (div) {
        React.unmountComponentAtNode(div);
        comp = null;
      }
    });

    it('renders container with items', function(){
      render({items: ['a', 'b', 'c']});

      assert.equal($('ul', div).length, 1);
      assert.equal($('li', div).length, 3);
      assert.equal($('li', div)[0].textContent, 'a');
    });

    it('renders container with object items', function(){
      render({items: [
          {fullName: 'a'},
          {fullName: 'b'},
          {fullName: 'c'}
        ],
        itemFilter: function (item) {
          return item.fullName;
        }
      });

      assert.strictEqual($('li', div)[0].textContent, 'a');
    });

  });

