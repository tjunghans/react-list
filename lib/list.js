'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'List',
  propTypes: {
    items: React.PropTypes.array.isRequired,
    itemFilter: React.PropTypes.func,
    cssClass: React.PropTypes.string,
    itemComponent: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      itemFilter: function (item) {
        return item;
      }
    };
  },
  render: function () {
    var list = [];
    var i;
    var items = this.props.items;
    var len = items.length;
    var item;

    for (i = 0; i < len; i++) {
      item = this.props.itemFilter(items[i]);
      list.push(React.DOM.li({ key: 'key' + i}, 
        React.createElement(this.props.itemComponent, item)
      ));
    }

    return (React.DOM.ul({className: this.props.cssClass}, list));
  }
});
