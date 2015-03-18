'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'List',
  propTypes: {
    items: React.PropTypes.array.isRequired,
    itemFilter: React.PropTypes.func,
    cssClass: React.PropTypes.string,
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
        React.addons.createFragment({
          id: item.id,
          name: item.name
        })
      ));
    }

    var extraClassName = this.props.className ? ' ' + this.props.className : '';
    var className = 'list-unstyled' + extraClassName;

    return (React.DOM.ul({className: className}, list));
  }
});
