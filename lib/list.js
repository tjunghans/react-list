'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'List',
  propTypes: {
    items: React.PropTypes.array.isRequired,
    itemFilter: React.PropTypes.func,
    cssClass: React.PropTypes.string,
    itemComponent: React.PropTypes.func,
    onItemClick: React.PropTypes.func
  },
  getDefaultsProps: function () {
    return {
      onItemClick: function () { return true; }
    };
  },
  render: function () {
    var list = [];
    var self = this;

    function filterItem(item) {
      if (self.props.itemFilter) {
        return self.props.itemFilter(item);
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
      function onItemClick() {
        self.props.onItemClick(item, i);
      }
      list.push(React.DOM.li({ key: 'key' + i, onClick: onItemClick},
        makeItem(item)));
    });

    return (React.DOM.ul({className: this.props.cssClass}, list));
  }
});
