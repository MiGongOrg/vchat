'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyUtils = require('./../../npm/wepy-utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setting = function (_wepy$page) {
  _inherits(Setting, _wepy$page);

  function Setting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Setting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Setting.__proto__ || Object.getPrototypeOf(Setting)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      iView: ['row', 'cell', 'icon', 'load-more'],
      disableScroll: true,
      navigationBarTitleText: '设置'
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


  _createClass(Setting, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      console.log('onLoad Setting...');
    }
  }]);

  return Setting;
}(_wepy2.default.page);

exports.default = Setting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNldHRpbmciLCJjb25maWciLCJpVmlldyIsImRpc2FibGVTY3JvbGwiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1ldGhvZHMiLCJjb3B5V2VjaGF0IiwiZSIsInRleHQiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidG9hc3QiLCJ0aXRsZSIsImljb24iLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJhcHBJZCIsInBhdGgiLCJjb21wb25lbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBRW5CQyxNLEdBQVM7QUFDUEMsYUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLEVBQXdCLFdBQXhCLENBREE7QUFFUEMscUJBQWUsSUFGUjtBQUdQQyw4QkFBd0I7QUFFMUI7QUFMUyxLLFFBTVRDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSO0FBQ0FDLGdCQUZRLHNCQUVJQyxDQUZKLEVBRU87QUFDYixZQUFJQyxPQUFPRCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJGLElBQTVCO0FBQ0EsdUJBQUtHLGdCQUFMLENBQXNCO0FBQ3BCUCxnQkFBTUksSUFEYztBQUVwQkksbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsNEJBQUtDLEtBQUwsQ0FBVztBQUNUQyxxQkFBTyxNQURFO0FBRVRDLG9CQUFNO0FBRkcsYUFBWDtBQUlEO0FBUm1CLFNBQXRCO0FBVUQsT0FkTzs7QUFlUjtBQUNBQywyQkFoQlEsaUNBZ0JlWixDQWhCZixFQWdCa0I7QUFDeEIsdUJBQUtZLHFCQUFMLENBQTJCO0FBQ3pCQyxpQkFBTyxvQkFEa0I7QUFFekJDLGdCQUFNLDZDQUZtQjtBQUd6QlQsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkMsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFMd0IsU0FBM0I7QUFPRDtBQXhCTyxLLFFBMkJWTyxVLEdBQWEsRTs7QUFwQ2I7O0FBUUE7O0FBMkJBOzs7Ozs7QUFFQTs2QkFDVTtBQUNSUixjQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDRDs7OztFQXpDa0MsZUFBS1EsSTs7a0JBQXJCeEIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBUSVBTIH0gZnJvbSAnd2VweS11dGlscydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDlj6rlnKggUGFnZSDlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoQgcGFnZS5qc29uIOaWh+S7tlxuICAgIGNvbmZpZyA9IHtcbiAgICAgIGlWaWV3OiBbJ3JvdycsICdjZWxsJywgJ2ljb24nLCAnbG9hZC1tb3JlJ10sXG4gICAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuvue9ridcbiAgICB9XG4gICAgLy8g6aG16Z2i5omA6ZyA5pWw5o2u5Z2H6ZyA5Zyo6L+Z6YeM5aOw5piO77yM55So5LqO5qih5p2/5pWw5o2u57uR5a6aXG4gICAgZGF0YSA9IHt9XG4gICAgLy8g5LqL5Lu25aSE55CG5Ye95pWw77yI6ZuG5Lit5L+d5a2Y5ZyoIG1ldGhvZHMg5a+56LGh5Lit77yJXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOWkjeWItuW+ruS/oVxuICAgICAgY29weVdlY2hhdCAoZSkge1xuICAgICAgICBsZXQgdGV4dCA9IGUudGFyZ2V0LmRhdGFzZXQudGV4dFxuICAgICAgICB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xuICAgICAgICAgIGRhdGE6IHRleHQsXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WkjeWItuW+ruS/oeWPt+aIkOWKn++8gScpXG4gICAgICAgICAgICBUSVBTLnRvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8nLFxuICAgICAgICAgICAgICBpY29uOiAnU1VDQ0VTUydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOi3s+i9rOe7mei1nuWwj+eoi+W6j1xuICAgICAgbmF2aWdhdGVUb01pbmlQcm9ncmFtIChlKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcbiAgICAgICAgICBhcHBJZDogJ3d4MThhMmFjOTkyMzA2YTVhNCcsXG4gICAgICAgICAgcGF0aDogJ3BhZ2VzL2FwcHMvbGFyZ2Vzcy9kZXRhaWw/aWQ9ZmZMc1BxT2pEN0UlM0QnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDmiJDlip8nKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu277yM5oiW5aOw5piO57uE5Lu25Lit5omA5byV55So55qE5a2Q57uE5Lu2XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgLy8g5ZyoIFBhZ2Ug5ZKMIENvbXBvbmVudCDlhbHnlKjnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCBTZXR0aW5nLi4uJylcbiAgICB9XG4gIH1cbiJdfQ==