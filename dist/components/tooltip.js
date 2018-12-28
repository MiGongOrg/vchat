'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_wepy$component) {
  _inherits(Tooltip, _wepy$component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      color: 'white'
    }, _this.props = {
      text: {
        type: String,
        default: '返回首页或分享给好友'
      },
      show: {
        type: Boolean,
        default: false,
        twoWay: true
      }
      // 事件处理函数（集中保存在 methods 对象中）
    }, _this.methods = {
      close: function close() {
        this.show = false;
        this.$apply();
      }
    }, _this.events = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 声明组件之间的事件处理函数

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(Tooltip, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      console.log('onLoad Tooltip...');
    }
  }]);

  return Tooltip;
}(_wepy2.default.component);

exports.default = Tooltip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAuanMiXSwibmFtZXMiOlsiVG9vbHRpcCIsImRhdGEiLCJjb2xvciIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0Iiwic2hvdyIsIkJvb2xlYW4iLCJ0d29XYXkiLCJtZXRob2RzIiwiY2xvc2UiLCIkYXBwbHkiLCJldmVudHMiLCJjb21wb25lbnRzIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFHUEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMLE9BREE7QUFLTkMsWUFBTTtBQUNKSCxjQUFNSSxPQURGO0FBRUpGLGlCQUFTLEtBRkw7QUFHSkcsZ0JBQVE7QUFISjtBQU1SO0FBWFEsSyxRQVlSQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQztBQUNQLGFBQUtKLElBQUwsR0FBWSxLQUFaO0FBQ0EsYUFBS0ssTUFBTDtBQUNEO0FBSk8sSyxRQU9WQyxNLEdBQVMsRSxRQUVUQyxVLEdBQWEsRTs7QUFIYjs7QUFFQTs7Ozs7O0FBRUE7NkJBQ1U7QUFDUkMsY0FBUUMsR0FBUixDQUFZLG1CQUFaO0FBQ0Q7Ozs7RUE3QmtDLGVBQUtDLFM7O2tCQUFyQmxCLE8iLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfVxuICAgIHByb3BzID0ge1xuICAgICAgdGV4dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfov5Tlm57pppbpobXmiJbliIbkuqvnu5nlpb3lj4snXG4gICAgICB9LFxuICAgICAgc2hvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOS6i+S7tuWkhOeQhuWHveaVsO+8iOmbhuS4reS/neWtmOWcqCBtZXRob2RzIOWvueixoeS4re+8iVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5aOw5piO57uE5Lu25LmL6Ze055qE5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgZXZlbnRzID0ge31cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7bvvIzmiJblo7DmmI7nu4Tku7bkuK3miYDlvJXnlKjnmoTlrZDnu4Tku7ZcbiAgICBjb21wb25lbnRzID0ge31cbiAgICAvLyDlnKggUGFnZSDlkowgQ29tcG9uZW50IOWFseeUqOeahOeUn+WRveWRqOacn+WHveaVsFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkIFRvb2x0aXAuLi4nKVxuICAgIH1cbiAgfVxuIl19