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

// Fixture
var dummyComponent = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    cssClass: React.PropTypes.string
  },
  render: function () {
    return (
      React.DOM.span({className: this.props.cssClass}, this.props.text)
    );
  }
})


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

  it('renders container with item component', function(){
    render({
      cssClass: 'user-list',
      items: [
        {fullName: 'Max Muster'},
        {fullName: 'Joe Soap'},
        {fullName: 'Canned Heat'}
      ],
      itemFilter: function (item) {
        return {
          text: item.fullName,
          cssClass: 'full-name'
        };
      },
      itemComponent: dummyComponent
    });

    assert.strictEqual($('ul.user-list', div).length, 1);
    assert.strictEqual($('.full-name', div).length, 3);
    assert.strictEqual($('span.full-name', div)[0].textContent, 'Max Muster');
  });

});

