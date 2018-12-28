'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyUtils = require('./../../npm/wepy-utils/index.js');

var _common = require('./../../common/index.js');

var _login = require('./../../mixins/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      disableScroll: true,
      navigationBarTitleText: '我的'
      // 页面所需数据均需在这里声明，用于模板数据绑定
    }, _this.data = {}, _this.mixins = [_login2.default], _this.methods = {
      copyUrl: function copyUrl() {
        var url = _common.API.wall + '/?id=' + this.openid;
        _wepy2.default.setClipboardData({
          data: url,
          success: function success(res) {
            console.log('复制大屏地址成功！');
            _wepyUtils.TIPS.toast({
              title: '复制成功',
              icon: 'SUCCESS'
            });
          }
        });
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // Login mixins

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(User, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      // 获取缓存中的 openid
      this.getStroageOpenid();
      console.log('onLoad User...');
    }
  }]);

  return User;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJjb25maWciLCJkaXNhYmxlU2Nyb2xsIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJtaXhpbnMiLCJtZXRob2RzIiwiY29weVVybCIsInVybCIsIndhbGwiLCJvcGVuaWQiLCJzZXRDbGlwYm9hcmREYXRhIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdCIsInRpdGxlIiwiaWNvbiIsImNvbXBvbmVudHMiLCJnZXRTdHJvYWdlT3BlbmlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFFbkJDLE0sR0FBUztBQUNQQyxxQkFBZSxJQURSO0FBRVBDLDhCQUF3QjtBQUUxQjtBQUpTLEssUUFLVEMsSSxHQUFPLEUsUUFFUEMsTSxHQUFTLGlCLFFBRVRDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNHO0FBQ1QsWUFBSUMsTUFBUyxZQUFJQyxJQUFiLGFBQXlCLEtBQUtDLE1BQWxDO0FBQ0EsdUJBQUtDLGdCQUFMLENBQXNCO0FBQ3BCUCxnQkFBTUksR0FEYztBQUVwQkksbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsNEJBQUtDLEtBQUwsQ0FBVztBQUNUQyxxQkFBTyxNQURFO0FBRVRDLG9CQUFNO0FBRkcsYUFBWDtBQUlEO0FBUm1CLFNBQXRCO0FBVUQ7QUFiTyxLLFFBZ0JWQyxVLEdBQWEsRTs7QUExQmI7O0FBT0E7O0FBRUE7O0FBZ0JBOzs7Ozs7QUFFQTs2QkFDVTtBQUNSO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDQU4sY0FBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7Ozs7RUFqQytCLGVBQUtNLEk7O2tCQUFsQnJCLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgVElQUyB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCB7IEFQSSB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgTG9naW4gZnJvbSAnQC9taXhpbnMvbG9naW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgLy8g5Y+q5ZyoIFBhZ2Ug5a6e5L6L5Lit5a2Y5Zyo55qE6YWN572u5pWw5o2u77yM5a+55bqU5LqO5Y6f55Sf55qEIHBhZ2UuanNvbiDmlofku7ZcbiAgICBjb25maWcgPSB7XG4gICAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG4gICAgLy8g6aG16Z2i5omA6ZyA5pWw5o2u5Z2H6ZyA5Zyo6L+Z6YeM5aOw5piO77yM55So5LqO5qih5p2/5pWw5o2u57uR5a6aXG4gICAgZGF0YSA9IHt9XG4gICAgLy8gTG9naW4gbWl4aW5zXG4gICAgbWl4aW5zID0gW0xvZ2luXVxuICAgIC8vIOS6i+S7tuWkhOeQhuWHveaVsO+8iOmbhuS4reS/neWtmOWcqCBtZXRob2RzIOWvueixoeS4re+8iVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjb3B5VXJsICgpIHtcbiAgICAgICAgbGV0IHVybCA9IGAke0FQSS53YWxsfS8/aWQ9JHt0aGlzLm9wZW5pZH1gXG4gICAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgICAgZGF0YTogdXJsLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflpI3liLblpKflsY/lnLDlnYDmiJDlip/vvIEnKVxuICAgICAgICAgICAgVElQUy50b2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5aSN5Yi25oiQ5YqfJyxcbiAgICAgICAgICAgICAgaWNvbjogJ1NVQ0NFU1MnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu277yM5oiW5aOw5piO57uE5Lu25Lit5omA5byV55So55qE5a2Q57uE5Lu2XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgLy8g5ZyoIFBhZ2Ug5ZKMIENvbXBvbmVudCDlhbHnlKjnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgLy8g6I635Y+W57yT5a2Y5Lit55qEIG9wZW5pZFxuICAgICAgdGhpcy5nZXRTdHJvYWdlT3BlbmlkKClcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQgVXNlci4uLicpXG4gICAgfVxuICB9XG4iXX0=