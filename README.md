# React-List

[![SemVer]](http://semver.org)
[![License]](https://github.com/tjunghans/react-list/blob/master/LICENCE)

A react component that renders an array as a html list. The array can consist of
primitives or objects. In the case of objects, the `formatItem` function
property can be used to format the item and return either a primitive or
 object. By default a string is expected. In case of an object, a custom `itemComponent` will be needed.

[Demo](http://tangiblej.neocities.org/react-list-example-v2.html)

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


## Usage 1 - Basic Example)

```javascript
var React = require('react');
var list = require('react-simple-list');

React.render(React.createElement(list, {
  items: ['Java', 'Java Flash', 'JavaScript']
}), document.querySelector('#list-1'));

```


## Usage 2 - With item component and filter

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
}), document.querySelector('#content'));

```


## Properties

- `items`: an array of items, where items can be an arbitrary object
- `formatItem`: an optional function that is called with each item and used to map the item to the properties of itemComponent
- `itemComponent`: an optional react class that is used to display an item
- `cssClass`: optional css class for the list
- `onItemClick(item, index)`: optional click handler. The argument contains the value of the clicked item and its index.

### List item properties

- `cssClass`: If an item object contains the property `cssClass` it will be applied to the rendered `<li>` element.
- `value`: If an item object contains the property `value` is used as the item
  label if no custom `itemComponent` is given.


## License

MIT

[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: http://img.shields.io/npm/l/mochify.svg


