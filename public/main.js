'use strict';

var React = require('react');
var list = require('../');

// Example 1
React.render(React.createElement(list, {
  items: ['Java', 'Java Flash', 'JavaScript']
}), document.querySelector('#list-1'));

// Example 2
var items = [
  {id: 1, firstname: 'Mike', lastname: 'November'},
  {id: 2, firstname: 'India', lastname: 'Juliet'},
  {id: 3, firstname: 'Alpha', lastname: 'Bravo'}
];

var itemComponent = React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.DOM.a({ href: this.props.href }, this.props.text)
    );
  }
});

function itemFilter(item) {
  return {
    href: '#' + item.id,
    text: item.firstname + ' ' + item.lastname
  };
}

React.render(React.createElement(list, {
  items: items,
  itemFilter: itemFilter,
  itemComponent: itemComponent,
  cssClass: 'list'
}), document.querySelector('#list-2'));

