'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

_wepy2.default.$store = store;

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home/index', 'pages/user/index', 'pages/about/index', 'pages/index'],
      subPackages: [{
        'root': 'pages/shake',
        'pages': ['index']
      }, {
        'root': 'pages/chat',
        'pages': ['index']
      }],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'white',
        navigationBarTitleText: 'chat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: false
      },
      tabBar: {
        'color': '#707070',
        'selectedColor': '#00E7C1',
        'borderStyle': 'white',
        'list': [{
          'selectedIconPath': 'images/ic_home_selected.png',
          'iconPath': 'images/ic_home.png',
          'pagePath': 'pages/home/index',
          'text': '首页'
        }, {
          'selectedIconPath': 'images/ic_my_selected.png',
          'iconPath': 'images/ic_my.png',
          'pagePath': 'pages/user/index',
          'text': '我的'
        }]
      },
      navigateToMiniProgramAppIdList: ['wx18a2ac992306a5a4']
      // 全局数据对象
    };
    _this.globalData = {
      systemInfo: {}
    };

    _this.use('requestfix');
    return _this;
  }
  // 获取设备信息


  _createClass(_default, [{
    key: 'getSystemInfo',
    value: function getSystemInfo() {
      this.globalData.systemInfo = _wepy2.default.getSystemInfoSync();
      // 根据 model 进行判断
      if (this.globalData.systemInfo.model.search('iPhone X') != -1) {
        this.globalData.systemInfo.isIPX = true;
      }
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {
      this.getSystemInfo();
      console.log('onLaunch...');
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIiRzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwic3ViUGFja2FnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwidGFiQmFyIiwibmF2aWdhdGVUb01pbmlQcm9ncmFtQXBwSWRMaXN0IiwiZ2xvYmFsRGF0YSIsInN5c3RlbUluZm8iLCJ1c2UiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIm1vZGVsIiwic2VhcmNoIiwiaXNJUFgiLCJnZXRTeXN0ZW1JbmZvIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOztBQUVBLGVBQUtDLE1BQUwsR0FBY0QsS0FBZDs7Ozs7QUF5REUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQXREZkUsTUFzRGUsR0F0RE47QUFDUEMsYUFBTyxDQUNMLGtCQURLLEVBRUwsa0JBRkssRUFHTCxtQkFISyxFQUlMLGFBSkssQ0FEQTtBQU9QQyxtQkFBYSxDQUNYO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLENBQ1AsT0FETztBQUZYLE9BRFcsRUFPWDtBQUNFLGdCQUFRLFlBRFY7QUFFRSxpQkFBUyxDQUNQLE9BRE87QUFGWCxPQVBXLENBUE47QUFxQlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE9BRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMsK0JBQXVCO0FBTGpCLE9BckJEO0FBNEJQQyxjQUFRO0FBQ04saUJBQVMsU0FESDtBQUVOLHlCQUFpQixTQUZYO0FBR04sdUJBQWUsT0FIVDtBQUlOLGdCQUFRLENBQUM7QUFDUCw4QkFBb0IsNkJBRGI7QUFFUCxzQkFBWSxvQkFGTDtBQUdQLHNCQUFZLGtCQUhMO0FBSVAsa0JBQVE7QUFKRCxTQUFELEVBTVI7QUFDRSw4QkFBb0IsMkJBRHRCO0FBRUUsc0JBQVksa0JBRmQ7QUFHRSxzQkFBWSxrQkFIZDtBQUlFLGtCQUFRO0FBSlYsU0FOUTtBQUpGLE9BNUJEO0FBNkNQQyxzQ0FBZ0MsQ0FDOUIsb0JBRDhCO0FBSWxDO0FBakRTLEtBc0RNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGtCQUFZO0FBREQsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7QUFDRDs7Ozs7b0NBQ2lCO0FBQ2YsV0FBS0YsVUFBTCxDQUFnQkMsVUFBaEIsR0FBNkIsZUFBS0UsaUJBQUwsRUFBN0I7QUFDQTtBQUNBLFVBQUksS0FBS0gsVUFBTCxDQUFnQkMsVUFBaEIsQ0FBMkJHLEtBQTNCLENBQWlDQyxNQUFqQyxDQUF3QyxVQUF4QyxLQUF1RCxDQUFDLENBQTVELEVBQStEO0FBQzdELGFBQUtMLFVBQUwsQ0FBZ0JDLFVBQWhCLENBQTJCSyxLQUEzQixHQUFtQyxJQUFuQztBQUNEO0FBQ0Y7OzsrQkFDVztBQUNWLFdBQUtDLGFBQUw7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGFBQVo7QUFDRDs7OztFQXRFMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcclxuc2V0U3RvcmUoc3RvcmUpXHJcblxyXG53ZXB5LiRzdG9yZSA9IHN0b3JlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaG9tZS9pbmRleCcsXHJcbiAgICAgICdwYWdlcy91c2VyL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2Fib3V0L2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2luZGV4J1xyXG4gICAgXSxcclxuICAgIHN1YlBhY2thZ2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAncm9vdCc6ICdwYWdlcy9zaGFrZScsXHJcbiAgICAgICAgJ3BhZ2VzJzogW1xyXG4gICAgICAgICAgJ2luZGV4J1xyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICdyb290JzogJ3BhZ2VzL2NoYXQnLFxyXG4gICAgICAgICdwYWdlcyc6IFtcclxuICAgICAgICAgICdpbmRleCdcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2NoYXQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgICdjb2xvcic6ICcjNzA3MDcwJyxcclxuICAgICAgJ3NlbGVjdGVkQ29sb3InOiAnIzAwRTdDMScsXHJcbiAgICAgICdib3JkZXJTdHlsZSc6ICd3aGl0ZScsXHJcbiAgICAgICdsaXN0JzogW3tcclxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICdpbWFnZXMvaWNfaG9tZV9zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICdpbWFnZXMvaWNfaG9tZS5wbmcnLFxyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9ob21lL2luZGV4JyxcclxuICAgICAgICAndGV4dCc6ICfpppbpobUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICdpbWFnZXMvaWNfbXlfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnaW1hZ2VzL2ljX215LnBuZycsXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL3VzZXIvaW5kZXgnLFxyXG4gICAgICAgICd0ZXh0JzogJ+aIkeeahCdcclxuICAgICAgfV1cclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW1BcHBJZExpc3Q6IFtcclxuICAgICAgJ3d4MThhMmFjOTkyMzA2YTVhNCdcclxuICAgIF1cclxuICB9XHJcbiAgLy8g5YWo5bGA5pWw5o2u5a+56LGhXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHN5c3RlbUluZm86IHt9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluiuvuWkh+S/oeaBr1xyXG4gIGdldFN5c3RlbUluZm8gKCkge1xyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnN5c3RlbUluZm8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgIC8vIOagueaNriBtb2RlbCDov5vooYzliKTmlq1cclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEuc3lzdGVtSW5mby5tb2RlbC5zZWFyY2goJ2lQaG9uZSBYJykgIT0gLTEpIHtcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhLnN5c3RlbUluZm8uaXNJUFggPSB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uTGF1bmNoICgpIHtcclxuICAgIHRoaXMuZ2V0U3lzdGVtSW5mbygpXHJcbiAgICBjb25zb2xlLmxvZygnb25MYXVuY2guLi4nKVxyXG4gIH1cclxufVxyXG4iXX0=