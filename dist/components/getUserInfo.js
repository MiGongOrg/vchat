'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyIview = require('./../npm/wepy-iview/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetUserInfo = function (_wepy$component) {
  _inherits(GetUserInfo, _wepy$component);

  function GetUserInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GetUserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GetUserInfo.__proto__ || Object.getPrototypeOf(GetUserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      visible: false,
      actions: [{
        name: '去授权'
      }]
    }, _this.props = {
      openid: {
        type: String,
        twoWay: true
      },
      isUserInfoShow: {
        type: Boolean,
        default: false,
        twoWay: true
      }
      // 事件处理函数（集中保存在 methods 对象中）
    }, _this.methods = {
      getUserInfo: function getUserInfo(res) {
        var userInfo = res.detail.userInfo;
        if (userInfo) {
          var data = userInfo;
          data.openid = this.openid;
          _wepy2.default.$store.dispatch({ type: 'USERINFO', payload: data });
          console.log('userInfo', data);

          this.isUserInfoShow = false;
          this.$apply();
          this.$emit('createConnect');
        } else {
          this.isUserInfoShow = false;
          this.visible = true;
          this.$apply();
        }
        console.log('getUserInfo', res);
      },
      openSetting: function openSetting() {
        var _this2 = this;

        _wepy2.default.openSetting({
          success: function success(res) {
            console.log(res);
            if (res.authSetting['scope.userInfo']) {
              _this2.visible = false;
              _this2.$apply();
              _this2.$emit('enter');
              (0, _wepyIview.$Message)({
                content: '授权成功',
                type: 'success'
              });
            }
          },
          fail: function fail(error) {
            (0, _wepyIview.$Message)({
              content: '授权失败',
              type: 'error'
            });
            console.log('从权限设置页面返回了', error);
          }
        });
      }
    }, _this.events = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 声明组件之间的事件处理函数

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(GetUserInfo, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      console.log('onLoad GetUserInfo...');
    }
  }]);

  return GetUserInfo;
}(_wepy2.default.component);

exports.default = GetUserInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbIkdldFVzZXJJbmZvIiwiZGF0YSIsInZpc2libGUiLCJhY3Rpb25zIiwibmFtZSIsInByb3BzIiwib3BlbmlkIiwidHlwZSIsIlN0cmluZyIsInR3b1dheSIsImlzVXNlckluZm9TaG93IiwiQm9vbGVhbiIsImRlZmF1bHQiLCJtZXRob2RzIiwiZ2V0VXNlckluZm8iLCJyZXMiLCJ1c2VySW5mbyIsImRldGFpbCIsIiRzdG9yZSIsImRpc3BhdGNoIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCIkZW1pdCIsIm9wZW5TZXR0aW5nIiwic3VjY2VzcyIsImF1dGhTZXR0aW5nIiwiY29udGVudCIsImZhaWwiLCJlcnJvciIsImV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsS0FESjtBQUVMQyxlQUFTLENBQUM7QUFDUkMsY0FBTTtBQURFLE9BQUQ7QUFGSixLLFFBTVBDLEssR0FBUTtBQUNOQyxjQUFRO0FBQ05DLGNBQU1DLE1BREE7QUFFTkMsZ0JBQVE7QUFGRixPQURGO0FBS05DLHNCQUFnQjtBQUNkSCxjQUFNSSxPQURRO0FBRWRDLGlCQUFTLEtBRks7QUFHZEgsZ0JBQVE7QUFITTtBQU1sQjtBQVhRLEssUUFZUkksTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNLQyxHQURMLEVBQ1U7QUFDaEIsWUFBSUMsV0FBV0QsSUFBSUUsTUFBSixDQUFXRCxRQUExQjtBQUNBLFlBQUlBLFFBQUosRUFBYztBQUNaLGNBQUlmLE9BQU9lLFFBQVg7QUFDQWYsZUFBS0ssTUFBTCxHQUFjLEtBQUtBLE1BQW5CO0FBQ0EseUJBQUtZLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixFQUFDWixNQUFNLFVBQVAsRUFBbUJhLFNBQVNuQixJQUE1QixFQUFyQjtBQUNBb0Isa0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCckIsSUFBeEI7O0FBRUEsZUFBS1MsY0FBTCxHQUFzQixLQUF0QjtBQUNBLGVBQUthLE1BQUw7QUFDQSxlQUFLQyxLQUFMLENBQVcsZUFBWDtBQUNELFNBVEQsTUFTTztBQUNMLGVBQUtkLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxlQUFLUixPQUFMLEdBQWUsSUFBZjtBQUNBLGVBQUtxQixNQUFMO0FBQ0Q7QUFDREYsZ0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCUCxHQUEzQjtBQUNELE9BbEJPO0FBbUJSVSxpQkFuQlEseUJBbUJPO0FBQUE7O0FBQ2IsdUJBQUtBLFdBQUwsQ0FBaUI7QUFDZkMsbUJBQVMsaUJBQUNYLEdBQUQsRUFBUztBQUNoQk0sb0JBQVFDLEdBQVIsQ0FBWVAsR0FBWjtBQUNBLGdCQUFJQSxJQUFJWSxXQUFKLENBQWdCLGdCQUFoQixDQUFKLEVBQXVDO0FBQ3JDLHFCQUFLekIsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS3FCLE1BQUw7QUFDQSxxQkFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDQSx1Q0FBUztBQUNQSSx5QkFBUyxNQURGO0FBRVByQixzQkFBTTtBQUZDLGVBQVQ7QUFJRDtBQUNGLFdBWmM7QUFhZnNCLGdCQUFNLGNBQUNDLEtBQUQsRUFBVztBQUNmLHFDQUFTO0FBQ1BGLHVCQUFTLE1BREY7QUFFUHJCLG9CQUFNO0FBRkMsYUFBVDtBQUlBYyxvQkFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJRLEtBQTFCO0FBQ0Q7QUFuQmMsU0FBakI7QUFxQkQ7QUF6Q08sSyxRQTRDVkMsTSxHQUFTLEUsUUFFVEMsVSxHQUFhLEU7O0FBSGI7O0FBRUE7Ozs7OztBQUVBOzZCQUNVO0FBQ1JYLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEOzs7O0VBckVzQyxlQUFLVyxTOztrQkFBekJqQyxXIiwiZmlsZSI6ImdldFVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7ICRNZXNzYWdlIH0gZnJvbSAnd2VweS1pdmlldydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHZXRVc2VySW5mbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICBhY3Rpb25zOiBbe1xuICAgICAgICBuYW1lOiAn5Y675o6I5p2DJ1xuICAgICAgfV1cbiAgICB9XG4gICAgcHJvcHMgPSB7XG4gICAgICBvcGVuaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBpc1VzZXJJbmZvU2hvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOS6i+S7tuWkhOeQhuWHveaVsO+8iOmbhuS4reS/neWtmOWcqCBtZXRob2RzIOWvueixoeS4re+8iVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnZXRVc2VySW5mbyAocmVzKSB7XG4gICAgICAgIGxldCB1c2VySW5mbyA9IHJlcy5kZXRhaWwudXNlckluZm9cbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSB1c2VySW5mb1xuICAgICAgICAgIGRhdGEub3BlbmlkID0gdGhpcy5vcGVuaWRcbiAgICAgICAgICB3ZXB5LiRzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1VTRVJJTkZPJywgcGF5bG9hZDogZGF0YX0pXG4gICAgICAgICAgY29uc29sZS5sb2coJ3VzZXJJbmZvJywgZGF0YSlcblxuICAgICAgICAgIHRoaXMuaXNVc2VySW5mb1Nob3cgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjcmVhdGVDb25uZWN0JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzVXNlckluZm9TaG93ID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRVc2VySW5mbycsIHJlcylcbiAgICAgIH0sXG4gICAgICBvcGVuU2V0dGluZyAoKSB7XG4gICAgICAgIHdlcHkub3BlblNldHRpbmcoe1xuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdlbnRlcicpXG4gICAgICAgICAgICAgICRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5o6I5p2D5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgJE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICBjb250ZW50OiAn5o6I5p2D5aSx6LSlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfku47mnYPpmZDorr7nva7pobXpnaLov5Tlm57kuoYnLCBlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOWjsOaYjue7hOS7tuS5i+mXtOeahOS6i+S7tuWkhOeQhuWHveaVsFxuICAgIGV2ZW50cyA9IHt9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu277yM5oiW5aOw5piO57uE5Lu25Lit5omA5byV55So55qE5a2Q57uE5Lu2XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgLy8g5ZyoIFBhZ2Ug5ZKMIENvbXBvbmVudCDlhbHnlKjnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCBHZXRVc2VySW5mby4uLicpXG4gICAgfVxuICB9XG4iXX0=