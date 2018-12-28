'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginMixin = function (_wepy$mixin) {
  _inherits(LoginMixin, _wepy$mixin);

  function LoginMixin() {
    _classCallCheck(this, LoginMixin);

    return _possibleConstructorReturn(this, (LoginMixin.__proto__ || Object.getPrototypeOf(LoginMixin)).apply(this, arguments));
  }

  _createClass(LoginMixin, [{
    key: 'getStroageOpenid',

    // 获取缓存 sessionKey
    value: function getStroageOpenid() {
      var _this2 = this;

      _wepy2.default.getStorage({
        key: 'openid',
        success: function success(res) {
          _this2.openid = res.data;
          _this2.$apply();
        },
        fail: function fail(error) {
          _this2.login();
        }
      });
    }
    // 写入缓存 sessionKey

  }, {
    key: 'setStorageOpenid',
    value: function setStorageOpenid(data) {
      var _this3 = this;

      _wepy2.default.setStorage({
        key: 'openid',
        data: data,
        success: function success(res) {
          _this3.openid = data;
          _this3.$apply();
          console.log('openid 缓存成功:', data);
        }
      });
    }
    // 登录认证

  }, {
    key: 'login',
    value: function login() {
      var _this4 = this;

      _wepy2.default.login({
        success: function success(res) {
          if (res.code) {
            var url = _common.API.login;
            var params = {
              code: res.code
            };
            _wepyUtils.HTTP.get({
              url: url,
              params: params
            }).then(function (res) {
              console.log(res);
              _this4.setStorageOpenid(res.openid);
            }).catch(function (error) {
              console.log(error);
            });
          }
        }
      });
    }
  }]);

  return LoginMixin;
}(_wepy2.default.mixin);

exports.default = LoginMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luTWl4aW4iLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsIm9wZW5pZCIsImRhdGEiLCIkYXBwbHkiLCJmYWlsIiwiZXJyb3IiLCJsb2dpbiIsInNldFN0b3JhZ2UiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsInVybCIsInBhcmFtcyIsImdldCIsInRoZW4iLCJzZXRTdG9yYWdlT3BlbmlkIiwiY2F0Y2giLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7O0FBQ25CO3VDQUNvQjtBQUFBOztBQUNsQixxQkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxhQUFLLFFBRFM7QUFFZEMsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixpQkFBS0MsTUFBTCxHQUFjRCxJQUFJRSxJQUFsQjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0QsU0FMYTtBQU1kQyxjQUFNLGNBQUNDLEtBQUQsRUFBVztBQUNmLGlCQUFLQyxLQUFMO0FBQ0Q7QUFSYSxPQUFoQjtBQVVEO0FBQ0Q7Ozs7cUNBQ2tCSixJLEVBQU07QUFBQTs7QUFDdEIscUJBQUtLLFVBQUwsQ0FBZ0I7QUFDZFQsYUFBSyxRQURTO0FBRWRJLGNBQU1BLElBRlE7QUFHZEgsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixpQkFBS0MsTUFBTCxHQUFjQyxJQUFkO0FBQ0EsaUJBQUtDLE1BQUw7QUFDQUssa0JBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCUCxJQUE1QjtBQUNEO0FBUGEsT0FBaEI7QUFTRDtBQUNEOzs7OzRCQUNTO0FBQUE7O0FBQ1AscUJBQUtJLEtBQUwsQ0FBVztBQUNUUCxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGNBQUlBLElBQUlVLElBQVIsRUFBYztBQUNaLGdCQUFJQyxNQUFNLFlBQUlMLEtBQWQ7QUFDQSxnQkFBSU0sU0FBUztBQUNYRixvQkFBTVYsSUFBSVU7QUFEQyxhQUFiO0FBR0EsNEJBQUtHLEdBQUwsQ0FBUztBQUNQRixtQkFBS0EsR0FERTtBQUVQQyxzQkFBUUE7QUFGRCxhQUFULEVBR0dFLElBSEgsQ0FHUSxVQUFDZCxHQUFELEVBQVM7QUFDZlEsc0JBQVFDLEdBQVIsQ0FBWVQsR0FBWjtBQUNBLHFCQUFLZSxnQkFBTCxDQUFzQmYsSUFBSUMsTUFBMUI7QUFDRCxhQU5ELEVBTUdlLEtBTkgsQ0FNUyxVQUFDWCxLQUFELEVBQVc7QUFDbEJHLHNCQUFRQyxHQUFSLENBQVlKLEtBQVo7QUFDRCxhQVJEO0FBU0Q7QUFDRjtBQWpCUSxPQUFYO0FBbUJEOzs7O0VBL0NxQyxlQUFLWSxLOztrQkFBeEJyQixVIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IEFQSSB9IGZyb20gJ0AvY29tbW9uJ1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3dlcHktdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgLy8g6I635Y+W57yT5a2YIHNlc3Npb25LZXlcbiAgZ2V0U3Ryb2FnZU9wZW5pZCAoKSB7XG4gICAgd2VweS5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ29wZW5pZCcsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMub3BlbmlkID0gcmVzLmRhdGFcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2luKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIC8vIOWGmeWFpee8k+WtmCBzZXNzaW9uS2V5XG4gIHNldFN0b3JhZ2VPcGVuaWQgKGRhdGEpIHtcbiAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnb3BlbmlkJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMub3BlbmlkID0gZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuaWQg57yT5a2Y5oiQ5YqfOicsIGRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAvLyDnmbvlvZXorqTor4FcbiAgbG9naW4gKCkge1xuICAgIHdlcHkubG9naW4oe1xuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICBsZXQgdXJsID0gQVBJLmxvZ2luXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgfVxuICAgICAgICAgIEhUVFAuZ2V0KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZU9wZW5pZChyZXMub3BlbmlkKVxuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iXX0=