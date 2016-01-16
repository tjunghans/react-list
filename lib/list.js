'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'List',
  propTypes: {
    items: React.PropTypes.array.isRequired,
    formatItem: React.PropTypes.func,
    cssClass: React.PropTypes.string,
    itemComponent: React.PropTypes.func,
    onItemClick: React.PropTypes.func
  },
  render: function () {
    var list = [];
    var self = this;

    function filterItem(item) {
      if (self.props.formatItem) {
        return self.props.formatItem(item);
      }
      if (item.value) {
        return item.value;
      }
      if (typeof (item.value) === 'string') {
        return { item: item };
      }
      return item;
    }

    function makeItem(item) {
      item = filterItem(item);
      if (self.props.itemComponent) {
        return React.createElement(self.props.itemComponent, item);
      }
      return item;
    }

    this.props.items.forEach(function (item, i) {
      var onItemClick;
      if (self.props.onItemClick) {
        onItemClick = function (event) {
          self.props.onItemClick(event, item, i);
        };
      }

      list.push(React.DOM.li({
        key: 'key' + i,
        onClick: onItemClick,
        className: item.cssClass
      }, makeItem(item)));
    }, this);

    return (React.DOM.ul({className: this.props.cssClass}, list));
  }
});
