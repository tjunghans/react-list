/*globals describe, it, beforeEach, afterEach */
/*jshint maxstatements:false */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var assert = require('assert');
var sinon = require('sinon');
var List = require('../lib/list');

function $(selector, context) {
  context = context || document;
  return context.querySelectorAll(selector);
}

// Fixture
var dummyComponent = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    customCssClass: React.PropTypes.string
  },
  render: function () {
    return (
      React.DOM.span({className: this.props.customCssClass}, this.props.text)
    );
  }
});

function prepareParams(params) {
  if (!params.items) {
    params.items = ['a', 'b', 'c'];
  }

  return params;
}

describe('component', function () {
  var div;

  function render(params) {
    return ReactDOM.render(React.createElement(List,
      prepareParams(params)), div);
  }

  beforeEach(function () {
    div = document.createElement("div");
  });

  afterEach(function () {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
    }
  });

  it('renders list', function () {
    render({items: ['foo']});

    assert.equal($('li', div).length, 1);
  });

  it('renders list with css class', function () {
    render({ cssClass: 'foobarbaz'});

    assert.equal($('ul.foobarbaz', div).length, 1);
  });

  it('renders items with cssClass', function () {
    render({
      items: [
        {value: 'Max Muster', cssClass: 'foo'},
        {value: 'Joe Soap', cssClass: 'bar'},
        {value: 'Canned Heat'}
      ]
    });

    assert($('li', div)[0].classList.contains('foo'));
    assert($('li', div)[1].classList.contains('bar'));
    assert.equal($('li', div)[2].classList.length, 0);
    assert.equal($('li', div)[0].textContent, 'Max Muster');
  });

  it('renders array of items in custom component', function () {
    render({
      items: ['a', 'b', 'c'],
      itemComponent: dummyComponent,
      formatItem: function (item) {
        return {
          text: item
        };
      }
    });

    assert.strictEqual($('li', div).length, 3);
    assert.strictEqual($('li span', div)[0].textContent,
      'a');
  });

  it('renders items in custom component', function () {
    render({
      items: [
        {fullName: 'Max Muster', value: 'max.muster'},
        {fullName: 'Joe Soap', value: 'joe.soap'},
        {fullName: 'Canned Heat', value: 'canned.heat'}
      ],
      formatItem: function (item) {
        return {
          text: item.fullName,
          customCssClass: 'full-name'
        };
      },
      itemComponent: dummyComponent
    });


    assert.strictEqual($('li', div).length, 3);
    assert.strictEqual($('li span.full-name', div)[0].textContent,
      'Max Muster');
  });

  it('calls onItemClick callback if set', function () {
    var spy = sinon.spy();
    render({
      items: ['foo', 'bar'],
      onItemClick: spy
    });

    TestUtils.Simulate.click($('li', div)[0]);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, sinon.match.object, 'foo');
  });

});

