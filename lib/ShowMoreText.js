'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactTruncate = require('react-truncate');

var _reactTruncate2 = _interopRequireDefault(_reactTruncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowMoreText = function (_Component) {
    _inherits(ShowMoreText, _Component);

    function ShowMoreText() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ShowMoreText);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShowMoreText.__proto__ || Object.getPrototypeOf(ShowMoreText)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expanded: false,
            truncated: false
        }, _this.handleTruncate = function (truncated) {
            if (truncated !== _this.state.truncated) {
                _this.setState({
                    truncated: truncated
                });
            }
        }, _this.toggleLines = function (event) {
            event.preventDefault();
            var _self = _this;
            _this.setState({
                expanded: !_this.state.expanded
            }, function () {
                if (_self.props.onClick) {
                    _self.props.onClick(_self.state.expanded);
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShowMoreText, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _self = this;
            this.setState({
                expanded: _self.props.expanded
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                more = _props.more,
                less = _props.less,
                lines = _props.lines,
                anchorClass = _props.anchorClass;
            var _state = this.state,
                expanded = _state.expanded,
                truncated = _state.truncated;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactTruncate2.default,
                    {
                        lines: !expanded && lines,
                        ellipsis: _react2.default.createElement(
                            'span',
                            null,
                            '... ',
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0);', className: anchorClass, onClick: this.toggleLines },
                                more
                            )
                        ),
                        onTruncate: this.handleTruncate
                    },
                    children
                ),
                !truncated && expanded && _react2.default.createElement(
                    'span',
                    null,
                    ' ',
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', className: anchorClass, onClick: this.toggleLines },
                        less
                    )
                )
            );
        }
    }]);

    return ShowMoreText;
}(_react.Component);

ShowMoreText.defaultProps = {
    lines: 3,
    more: 'Show more',
    less: 'Show less',
    anchorClass: '',
    onClick: undefined,
    expanded: false
};
ShowMoreText.propTypes = {
    children: _propTypes.PropTypes.node,
    lines: _propTypes.PropTypes.number,
    more: _propTypes.PropTypes.node,
    less: _propTypes.PropTypes.node,
    anchorClass: _propTypes.PropTypes.string,
    onClick: _propTypes.PropTypes.func,
    expanded: _propTypes.PropTypes.bool
};
exports.default = ShowMoreText;
module.exports = exports['default'];