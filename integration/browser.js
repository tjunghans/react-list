'use strict';

var React = require('react');
var List = require('../');

var widget = document.querySelector('.widget');

function render(component, config, container) {
  var div = document.createElement('div');
  container.appendChild(div);
  React.render(React.createElement(component, config), div);
}
/*
render(List, {
  items: ['apples', 'bananas', 'cherries', 'dates']
}, widget);*/

function makeItem(id, name) {
  return {
    id: id,
    name: name,
    href: '#' + name
  };
}

var Item = React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.DOM.a({
        href: this.props.href
      }, this.props.text)
    );
  }
})

render(List, {
  items: [
    makeItem(0, 'Apple'), 
    makeItem(1, 'Microsoft'), 
    makeItem(2, 'Oracle')
  ],
  itemComponent: Item,
  itemFilter: function (data) {
    return {
      href: data.href,
      text: data.name
    };
  }
}, widget);

