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
    var itemContent;

    for (i = 0; i < len; i++) {
      item = this.props.itemFilter(items[i]);
      list.push(React.DOM.li({ key: 'key' + i}, 
        React.createElement(this.props.itemComponent, item)
      ));
    }

    var extraClassName = this.props.cssClass ? ' ' + this.props.cssClass : '';
    var className = 'list-unstyled' + extraClassName;

    return (React.DOM.ul({className: className}, list));
  }
});
