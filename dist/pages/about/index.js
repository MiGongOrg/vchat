'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyUtils = require('./../../npm/wepy-utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_wepy$page) {
  _inherits(About, _wepy$page);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      iView: ['row', 'cell', 'icon', 'load-more'],
      disableScroll: true,
      navigationBarTitleText: '关于我们'
      // 页面所需数据均需在这里声明，用于模板数据绑定
    }, _this.data = {}, _this.methods = {
      // 复制微信
      copyWechat: function copyWechat(e) {
        var text = e.target.dataset.text;
        _wepy2.default.setClipboardData({
          data: text,
          success: function success(res) {
            console.log('复制微信号成功！');
            _wepyUtils.TIPS.toast({
              title: '复制成功',
              icon: 'SUCCESS'
            });
          }
        });
      },

      // 跳转给赞小程序
      navigateToMiniProgram: function navigateToMiniProgram(e) {
        _wepy2.default.navigateToMiniProgram({
          appId: 'wx18a2ac992306a5a4',
          path: 'pages/apps/largess/detail?id=ffLsPqOjD7E%3D',
          success: function success(res) {
            console.log('打开成功');
          }
        });
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(About, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      console.log('onLoad About...');
    }
  }]);

  return About;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/about/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwiaVZpZXciLCJkaXNhYmxlU2Nyb2xsIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJtZXRob2RzIiwiY29weVdlY2hhdCIsImUiLCJ0ZXh0IiwidGFyZ2V0IiwiZGF0YXNldCIsInNldENsaXBib2FyZERhdGEiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInRvYXN0IiwidGl0bGUiLCJpY29uIiwibmF2aWdhdGVUb01pbmlQcm9ncmFtIiwiYXBwSWQiLCJwYXRoIiwiY29tcG9uZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUVuQkMsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixNQUFoQixFQUF3QixXQUF4QixDQURBO0FBRVBDLHFCQUFlLElBRlI7QUFHUEMsOEJBQXdCO0FBRTFCO0FBTFMsSyxRQU1UQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVU7QUFDUjtBQUNBQyxnQkFGUSxzQkFFSUMsQ0FGSixFQUVPO0FBQ2IsWUFBSUMsT0FBT0QsRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCRixJQUE1QjtBQUNBLHVCQUFLRyxnQkFBTCxDQUFzQjtBQUNwQlAsZ0JBQU1JLElBRGM7QUFFcEJJLG1CQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJDLG9CQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLDRCQUFLQyxLQUFMLENBQVc7QUFDVEMscUJBQU8sTUFERTtBQUVUQyxvQkFBTTtBQUZHLGFBQVg7QUFJRDtBQVJtQixTQUF0QjtBQVVELE9BZE87O0FBZVI7QUFDQUMsMkJBaEJRLGlDQWdCZVosQ0FoQmYsRUFnQmtCO0FBQ3hCLHVCQUFLWSxxQkFBTCxDQUEyQjtBQUN6QkMsaUJBQU8sb0JBRGtCO0FBRXpCQyxnQkFBTSw2Q0FGbUI7QUFHekJULG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEO0FBTHdCLFNBQTNCO0FBT0Q7QUF4Qk8sSyxRQTJCVk8sVSxHQUFhLEU7O0FBcENiOztBQVFBOztBQTJCQTs7Ozs7O0FBRUE7NkJBQ1U7QUFDUlIsY0FBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0Q7Ozs7RUF6Q2dDLGVBQUtRLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgVElQUyB9IGZyb20gJ3dlcHktdXRpbHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIC8vIOWPquWcqCBQYWdlIOWunuS+i+S4reWtmOWcqOeahOmFjee9ruaVsOaNru+8jOWvueW6lOS6juWOn+eUn+eahCBwYWdlLmpzb24g5paH5Lu2XG4gICAgY29uZmlnID0ge1xuICAgICAgaVZpZXc6IFsncm93JywgJ2NlbGwnLCAnaWNvbicsICdsb2FkLW1vcmUnXSxcbiAgICAgIGRpc2FibGVTY3JvbGw6IHRydWUsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWz5LqO5oiR5LusJ1xuICAgIH1cbiAgICAvLyDpobXpnaLmiYDpnIDmlbDmja7lnYfpnIDlnKjov5nph4zlo7DmmI7vvIznlKjkuo7mqKHmnb/mlbDmja7nu5HlrppcbiAgICBkYXRhID0ge31cbiAgICAvLyDkuovku7blpITnkIblh73mlbDvvIjpm4bkuK3kv53lrZjlnKggbWV0aG9kcyDlr7nosaHkuK3vvIlcbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g5aSN5Yi25b6u5L+hXG4gICAgICBjb3B5V2VjaGF0IChlKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gZS50YXJnZXQuZGF0YXNldC50ZXh0XG4gICAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgICAgZGF0YTogdGV4dCxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5aSN5Yi25b6u5L+h5Y+35oiQ5Yqf77yBJylcbiAgICAgICAgICAgIFRJUFMudG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WkjeWItuaIkOWKnycsXG4gICAgICAgICAgICAgIGljb246ICdTVUNDRVNTJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g6Lez6L2s57uZ6LWe5bCP56iL5bqPXG4gICAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0gKGUpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xuICAgICAgICAgIGFwcElkOiAnd3gxOGEyYWM5OTIzMDZhNWE0JyxcbiAgICAgICAgICBwYXRoOiAncGFnZXMvYXBwcy9sYXJnZXNzL2RldGFpbD9pZD1mZkxzUHFPakQ3RSUzRCcsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOaIkOWKnycpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7bvvIzmiJblo7DmmI7nu4Tku7bkuK3miYDlvJXnlKjnmoTlrZDnu4Tku7ZcbiAgICBjb21wb25lbnRzID0ge31cbiAgICAvLyDlnKggUGFnZSDlkowgQ29tcG9uZW50IOWFseeUqOeahOeUn+WRveWRqOacn+WHveaVsFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkIEFib3V0Li4uJylcbiAgICB9XG4gIH1cbiJdfQ==