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

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTextStyle: 'black',
      navigationBarBackgroundColor: 'white',
      navigationBarTitleText: '首页',
      disableScroll: true
      // 页面所需数据均需在这里声明，用于模板数据绑定
    }, _this.data = {}, _this.methods = {
      navigateTo: function navigateTo(e) {
        var page = e.target.dataset.page;
        var url = '/pages/' + page + '/index';
        _wepyUtils.TIPS.navigateTo(url);
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(Home, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      console.log('onLoad Home...');
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkaXNhYmxlU2Nyb2xsIiwiZGF0YSIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwiZSIsInBhZ2UiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidXJsIiwiY29tcG9uZW50cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyxvQ0FBOEIsT0FGdkI7QUFHUEMsOEJBQXdCLElBSGpCO0FBSVBDLHFCQUFlO0FBRWpCO0FBTlMsSyxRQU9UQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0lDLENBREosRUFDTztBQUNiLFlBQUlDLE9BQU9ELEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkYsSUFBNUI7QUFDQSxZQUFJRyxrQkFBZ0JILElBQWhCLFdBQUo7QUFDQSx3QkFBS0YsVUFBTCxDQUFnQkssR0FBaEI7QUFDRDtBQUxPLEssUUFRVkMsVSxHQUFhLEU7O0FBbEJiOztBQVNBOztBQVFBOzs7Ozs7QUFFQTs2QkFDVTtBQUNSQyxjQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDs7OztFQXZCK0IsZUFBS04sSTs7a0JBQWxCVixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IFRJUFMgfSBmcm9tICd3ZXB5LXV0aWxzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIC8vIOWPquWcqCBQYWdlIOWunuS+i+S4reWtmOWcqOeahOmFjee9ruaVsOaNru+8jOWvueW6lOS6juWOn+eUn+eahCBwYWdlLmpzb24g5paH5Lu2XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG1JyxcbiAgICAgIGRpc2FibGVTY3JvbGw6IHRydWVcbiAgICB9XG4gICAgLy8g6aG16Z2i5omA6ZyA5pWw5o2u5Z2H6ZyA5Zyo6L+Z6YeM5aOw5piO77yM55So5LqO5qih5p2/5pWw5o2u57uR5a6aXG4gICAgZGF0YSA9IHt9XG4gICAgLy8g5LqL5Lu25aSE55CG5Ye95pWw77yI6ZuG5Lit5L+d5a2Y5ZyoIG1ldGhvZHMg5a+56LGh5Lit77yJXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5hdmlnYXRlVG8gKGUpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBlLnRhcmdldC5kYXRhc2V0LnBhZ2VcbiAgICAgICAgbGV0IHVybCA9IGAvcGFnZXMvJHtwYWdlfS9pbmRleGBcbiAgICAgICAgVElQUy5uYXZpZ2F0ZVRvKHVybClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu277yM5oiW5aOw5piO57uE5Lu25Lit5omA5byV55So55qE5a2Q57uE5Lu2XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgLy8g5ZyoIFBhZ2Ug5ZKMIENvbXBvbmVudCDlhbHnlKjnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCBIb21lLi4uJylcbiAgICB9XG4gIH1cbiJdfQ==