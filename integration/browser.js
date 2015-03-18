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
    name: name
  };
}
render(List, {
  items: [
    makeItem(0, 'Apple'), 
    makeItem(1, 'Microsoft'), 
    makeItem(2, 'Oracle')
  ]
}, widget);

