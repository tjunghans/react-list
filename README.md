# React-List

[![SemVer]](http://semver.org)
[![License]](https://github.com/tjunghans/react-list/blob/master/LICENCE)

A react component that renders an array of objects (items) using the give component (itemComponent).

[Demo](http://tangiblej.neocities.org/react-list-example.html)


## Install

Install as node dependency:

```
npm install react-simple-list --save
```


## Quickstart

```
npm start & npm run watch
```


## Commands

- `npm run build` - build production css and js
- `npm run watch` - compile css and js
- `npm start` - start static dev server


## Usage

```javascript

var React = require('react');
var list = require('react-simple-list');

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
}), document.querySelector('#content'));

```


## Properties

- `items`: an array of items, where items can be an arbitrary object
- `itemFilter`: a function that is called with each item and used to map the item to the properties of itemComponent
- `itemComponent`: a react class that is used to display an item


## License

MIT

[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: http://img.shields.io/npm/l/mochify.svg


