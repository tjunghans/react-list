# React-List

[![SemVer]](http://semver.org)
[![License]](https://github.com/tjunghans/react-list/blob/master/LICENCE)

A react component that renders an array of objects (items) using the give component (itemComponent).


## Install

Install as node dependency:

```
npm install react-simple-list --save
```


## Usage

```javascript

var React = require('react');
var list = require('react-simple-list');

var container = document.querySelector('body');

var items = [
  {id: 1, firstname: 'Mike', lastname: 'November'},
  {id: 2, firstname: 'India', lastname: 'Juliet'},
  {id: 3, firstname: 'Alpha', lastname: 'Bravo'},
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
}), container);

```


## Properties

- `items`: an array of items, where items can be an arbitrary object
- `itemFilter`: a function that is called with each item and used to map the item to the properties of itemComponent
- `itemComponent`: a react class that is used to display an item


## Preview

Run `node integration` to preview the component on http://localhost:8000


## License

MIT

[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: http://img.shields.io/npm/l/mochify.svg


