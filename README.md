# React-List

[![SemVer]](http://semver.org)
[![License]](https://github.com/tjunghans/react-list/blob/master/LICENCE)
[![Build Status](https://travis-ci.org/tjunghans/react-list.svg?branch=master)](https://travis-ci.org/tjunghans/react-list)

A react component that renders an array as an html list. The array can consist of
primitives or objects. In the case of objects, the `formatItem` function
property can be used to format the item and return either a primitive or
 object. By default a string is expected. In case of an object, a custom `itemComponent` is required.

[Demo](http://tangiblej.neocities.org/react_list_example_v2.html)

## Install

Install as node dependency:

```
npm install react-simple-list --save
```


## Usage 1 - Basic Example

```javascript
var React = require('react');
var list = require('react-simple-list');

React.render(React.createElement(list, {
  items: ['Java', 'Java Flash', 'JavaScript']
}), document.querySelector('#list-1'));

```


## Usage 2 - With object

Note that the `value` property is used as the label by default. This allows
the usage of objects without the help of the item formatter and component.

```javascript
React.render(React.createElement(list, {
  items: [{
    value: 'Apple'
  }, {
    value: 'Banana'
  }, {
    value: 'Cherry'
  }]
}), document.querySelector('#list-2'));
```


## Usage 3 - With object, item component and formatter

```javascript
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

function formatItem(item) {
  return {
    href: '#' + item.id,
    text: item.firstname + ' ' + item.lastname
  };
}

React.render(React.createElement(list, {
  items: items,
  formatItem: formatItem,
  itemComponent: itemComponent,
  cssClass: 'list'
}), document.querySelector('#list-2'));

```


## Properties

- `items`: an array of items, where items can be an arbitrary object
- `formatItem`: an optional function that is called with each item and used to map the item to the properties of itemComponent
- `itemComponent`: an optional react class that is used to display an item
- `cssClass`: optional css class for the list
- `onItemClick(event, item, index)`: optional click handler. The argument contains the value of the clicked item and its index.

### List item properties

- `cssClass`: If an item object contains the property `cssClass` it will be applied to the rendered `<li>` element.
- `value`: If an item object contains the property `value`, it is used as the item
  label if no custom `itemComponent` is given.

## Run local demo

```
npm start & npm run watch
```


- `npm run build` - build production css and js
- `npm run watch` - compile css and js
- `npm start` - start static dev server

## License

MIT

[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/github/license/mashape/apistatus.svg


