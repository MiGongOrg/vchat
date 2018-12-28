'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {}, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // 页面所需数据均需在这里声明，用于模板数据绑定

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(Index, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      console.log('onLoad Index...');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsIm1ldGhvZHMiLCJjb21wb25lbnRzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUVuQkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPLEUsUUFFUEMsTyxHQUFVLEUsUUFFVkMsVSxHQUFhLEU7O0FBUGI7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQUVBOzZCQUNVO0FBQ1JDLGNBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNEOzs7O0VBWmdDLGVBQUtDLEk7O2tCQUFuQlAsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDlj6rlnKggUGFnZSDlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoQgcGFnZS5qc29uIOaWh+S7tlxuICAgIGNvbmZpZyA9IHt9XG4gICAgLy8g6aG16Z2i5omA6ZyA5pWw5o2u5Z2H6ZyA5Zyo6L+Z6YeM5aOw5piO77yM55So5LqO5qih5p2/5pWw5o2u57uR5a6aXG4gICAgZGF0YSA9IHt9XG4gICAgLy8g5LqL5Lu25aSE55CG5Ye95pWw77yI6ZuG5Lit5L+d5a2Y5ZyoIG1ldGhvZHMg5a+56LGh5Lit77yJXG4gICAgbWV0aG9kcyA9IHt9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu277yM5oiW5aOw5piO57uE5Lu25Lit5omA5byV55So55qE5a2Q57uE5Lu2XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgLy8g5ZyoIFBhZ2Ug5ZKMIENvbXBvbmVudCDlhbHnlKjnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCBJbmRleC4uLicpXG4gICAgfVxuICB9XG4iXX0=