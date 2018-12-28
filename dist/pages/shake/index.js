'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _weappSocket = require('./../../npm/weapp.socket.io/dist/weapp.socket.io.js');

var _weappSocket2 = _interopRequireDefault(_weappSocket);

var _login = require('./../../mixins/login.js');

var _login2 = _interopRequireDefault(_login);

var _wepyIview = require('./../../npm/wepy-iview/index.js');

var _common = require('./../../common/index.js');

var _wepyUtils = require('./../../npm/wepy-utils/index.js');

var _getUserInfo = require('./../../components/getUserInfo.js');

var _getUserInfo2 = _interopRequireDefault(_getUserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shake = (_dec = (0, _wepyRedux.connect)({
  userInfo: function userInfo(state) {
    return state.user.info;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Shake, _wepy$page);

  function Shake() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Shake);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Shake.__proto__ || Object.getPrototypeOf(Shake)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#444444',
      navigationBarTextStyle: 'white',
      navigationBarTitleText: '摇一摇',
      disableScroll: true
      // 页面所需数据均需在这里声明，用于模板数据绑定
    }, _this.data = {
      openid: null,
      messages: [],
      msgUuid: null,
      isStart: false,
      isUserInfoShow: false,
      open: 0,
      x: 0,
      y: 0,
      z: 0,
      lastX: 0,
      lastY: 0,
      lastZ: 0,
      lastTime: 0,
      shakeSpeed: 110
      // Login mixins
    }, _this.mixins = [_login2.default], _this.watch = {
      openid: function openid(newValue, oldValue) {
        console.log(newValue, oldValue);
        if (newValue !== oldValue) {
          this.roomId = newValue;
          this.$apply();
          this.enter();
        }
      }
    }, _this.methods = {
      test: function test() {
        this.sendCount();
      },
      userInfoCreateConnect: function userInfoCreateConnect() {
        this.createConnect();
      },
      userInfoEnter: function userInfoEnter() {
        this.enter();
      }
    }, _this.$repeat = {}, _this.$props = { "getuserinfo": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:openid.sync": "openid", "v-bind:isUserInfoShow.sync": "isUserInfoShow" } }, _this.$events = { "getuserinfo": { "v-on:createConnect": "userInfoCreateConnect", "v-on:enter": "userInfoEnter" } }, _this.components = {
      getuserinfo: _getUserInfo2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // 监听

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(Shake, [{
    key: 'shake',
    value: function shake(acceleration) {
      var _this2 = this;

      var nowTime = new Date().getTime();
      if (nowTime - this.lastTime > 100) {
        var diffTime = nowTime - this.lastTime;
        this.lastTime = nowTime;
        this.x = acceleration.x;
        this.y = acceleration.y;
        this.z = acceleration.z;
        // 计算速率
        var speed = Math.abs(this.x + this.y + this.z - this.lastX - this.lastY - this.lastZ) / diffTime * 10000;
        // 如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
        if (speed > this.shakeSpeed) {
          _wepy2.default.stopAccelerometer();
          // 播放声音
          this.audioContext.play();
          this.open = 10;
          var timeOut = setTimeout(function () {
            _this2.open = 0;
            _this2.$apply();
            // 触发摇一摇，socket 推送 +1
            if (_this2.isStart) {
              _this2.sendCount();
            } else {
              _wepyUtils.TIPS.toast({
                title: '未开始',
                image: './images/clock.png'
              });
            }
            // 停止声音
            // this.audioContext.stop()
            _wepy2.default.startAccelerometer();
          }, 500);
        }

        this.lastX = this.x;
        this.lastY = this.y;
        this.lastZ = this.z;
        this.$apply();
      }
    }
  }, {
    key: 'sendCount',
    value: function sendCount() {
      var type = 'shake';
      var message = this.createUserMessage(type, this.userInfo);
      this.socket.emit('new shake', message);
    }
    // 加速度

  }, {
    key: 'onAccelerometerChange',
    value: function onAccelerometerChange() {
      var _this3 = this;

      this.audioContext = _wepy2.default.createInnerAudioContext();
      this.audioContext.src = 'https://img.migong.org/shake/shake_start.mp3';
      this.$apply();
      _wepy2.default.onAccelerometerChange(function (res) {
        _this3.shake(res);
      });
    }
    // 生成一条聊天室的消息的唯一 ID

  }, {
    key: 'msgUuid',
    value: function msgUuid() {
      if (!this.msgUuid.next) {
        this.msgUuid.next = 0;
        this.$apply();
      }
      return 'msg-' + ++this.msgUuid.next;
    }
    // 生成聊天室的系统消息

  }, {
    key: 'createSystemMessage',
    value: function createSystemMessage(content) {
      return { id: this.msgUuid(), type: 'system', content: content };
    }
    // 生成聊天室的聊天消息

  }, {
    key: 'createUserMessage',
    value: function createUserMessage(type, user) {
      console.log({ type: type, user: user });
      return { type: type, user: user };
    }
    // 通用更新当前消息集合的方法

  }, {
    key: 'updateMessages',
    value: function updateMessages(updater) {
      var messages = this.data.messages;
      updater(messages);
      this.$apply();

      // 需要先更新 messagess 数据后再设置滚动位置，否则不能生效
      this.lastMessageId = messages.length ? messages[messages.length - 1].id : 'none';
      this.$apply();
    }
    // 追加一条消息

  }, {
    key: 'pushMessage',
    value: function pushMessage(message) {
      this.updateMessages(function (messages) {
        return messages.push(message);
      });
    }
    // 启动 Socket

  }, {
    key: 'enter',
    value: function enter() {
      var _this4 = this;

      (0, _wepyIview.$Message)({
        content: '准备加入...',
        type: 'default',
        duration: 999
      });
      // 如果登录过，会记录当前用户在 this.me 上
      if (!this.userInfo) {
        _wepy2.default.getUserInfo({
          success: function success(res) {
            var data = res.userInfo;
            data.openid = _this4.openid;
            _wepy2.default.$store.dispatch({ type: 'USERINFO', payload: data });
            console.log('启动摇一摇:', data);
            _this4.createConnect();
          },
          fail: function fail(error) {
            _this4.isUserInfoShow = true;
            _this4.$apply();
            console.log(error);
          }
        });
      } else {
        console.log('me:::', this.me);
        this.createConnect();
      }
    }
    // 创建连接

  }, {
    key: 'createConnect',
    value: function createConnect(e) {
      var _this5 = this;

      (0, _wepyIview.$Message)({
        content: '正在加入...',
        type: 'default'
      });

      var socket = this.socket = (0, _weappSocket2.default)(_common.API.hostname + '?type=shake&roomId=' + this.roomId);

      // 连接成功
      socket.on('connect', function () {
        (0, _wepyIview.$Message)({
          content: '加入成功...',
          type: 'success'
        });
        var type = 'join';
        var message = _this5.createUserMessage(type, _this5.userInfo);
        _this5.socket.emit('new shake', message);
      });
      // 连接错误
      socket.on('connect_error', function (d) {
        var content = '\u8FDE\u63A5\u9519\u8BEF: ' + d;
        (0, _wepyIview.$Message)({
          content: content,
          type: 'error'
        });
      });
      // 连接超时
      socket.on('connect_timeout', function (d) {
        var content = '\u8FDE\u63A5\u8D85\u65F6: ' + d;
        (0, _wepyIview.$Message)({
          content: content,
          type: 'error'
        });
      });
      // 连接断开
      socket.on('disconnect', function (reason) {
        var content = '\u8FDE\u63A5\u65AD\u5F00: ' + reason;
        (0, _wepyIview.$Message)({
          content: content,
          type: 'warning'
        });
      });
      // 重新连接
      socket.on('reconnect', function (attemptNumber) {
        var content = '\u91CD\u65B0\u8FDE\u63A5: ' + attemptNumber;
        (0, _wepyIview.$Message)({
          content: content,
          type: 'success'
        });
      });

      socket.on('reconnect_failed', function () {
        _this5.pushMessage(_this5.createSystemMessage('reconnect_failed'));
      });
      // 断开重连
      socket.on('reconnect_attempt', function () {
        (0, _wepyIview.$Message)({
          content: '正在尝试重连...',
          type: 'default'
        });
      });
      // 错误
      socket.on('error', function (err) {
        var content = '\u9519\u8BEF: ' + err;
        (0, _wepyIview.$Message)({
          content: content,
          type: 'error'
        });
      });
      // 监听开始倒计时
      socket.on('start countdown', function (d) {
        console.log('触发了开始倒计时');
        var time = 3;
        var timer = setInterval(function () {
          if (time === 0) {
            clearInterval(timer);
            time = 3;
            // 开始倒计时
            _this5.countdown();
          } else {
            _wepyUtils.TIPS.toast({
              title: '       ',
              image: './images/' + time + '.png',
              mask: true,
              duration: 1000
            });
            --time;
          }
        }, 1000);
      });
      // 监听聊天室消息
      socket.on('login', function (d) {
        _this5.pushMessage(_this5.createSystemMessage('\u60A8\u5DF2\u52A0\u5165\u804A\u5929\u5BA4\uFF0C\u5F53\u524D\u5171\u6709 ' + d.numUsers + ' \u4EBA'));
      });
      // 接收到新的聊天消息
      socket.on('new shake', function (d) {
        var user = d.user,
            message = d.message;

        console.log('接收到新消息：', message);
        // this.pushMessage(this.createUserMessage(message, user))
      });
      // 用户进入
      socket.on('user joined', function (d) {
        console.log('用户来了：', d);
        _this5.pushMessage(_this5.createSystemMessage(d.user.nickName + ' \u6765\u4E86\uFF0C\u5F53\u524D\u5171\u6709 ' + d.numUsers + ' \u4EBA'));
      });
      // 用户离开
      socket.on('user left', function (d) {
        _this5.pushMessage(_this5.createSystemMessage(d.user.nickName + ' \u79BB\u5F00\u4E86\uFF0C\u5F53\u524D\u5171\u6709 ' + d.numUsers + ' \u4EBA'));
      });

      socket.emit('add user', this.userInfo);
    }
    // 倒计时

  }, {
    key: 'countdown',
    value: function countdown() {
      var _this6 = this;

      this.isStart = true;
      var time = 30;
      clearInterval(timer);
      var timer = setInterval(function () {
        --time;
        if (!time) {
          clearInterval(timer);
          _this6.isStart = false;
        }
        _this6.$apply();
      }, 1000);
    }
    // 在 Page 和 Component 共用的生命周期函数

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      if (options.roomId) {
        this.roomId = options.roomId;
        this.getStroageOpenid();
      } else {
        // 获取缓存中的 openid 赋值给 roomId
        this.getStroageOpenid();
      }
      this.$apply();
      this.onAccelerometerChange();

      _wepy2.default.showShareMenu({
        withShareTicket: true
      });
      console.log('onLoad Shake...');
    }
    // 监听页面卸载

  }, {
    key: 'onUnload',
    value: function onUnload() {
      // 主动断开 socket
      this.socket.close();
    }
  }]);

  return Shake;
}(_wepy2.default.page)) || _class);

Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Shake , 'pages/shake/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNoYWtlIiwidXNlckluZm8iLCJzdGF0ZSIsInVzZXIiLCJpbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGlzYWJsZVNjcm9sbCIsImRhdGEiLCJvcGVuaWQiLCJtZXNzYWdlcyIsIm1zZ1V1aWQiLCJpc1N0YXJ0IiwiaXNVc2VySW5mb1Nob3ciLCJvcGVuIiwieCIsInkiLCJ6IiwibGFzdFgiLCJsYXN0WSIsImxhc3RaIiwibGFzdFRpbWUiLCJzaGFrZVNwZWVkIiwibWl4aW5zIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsInJvb21JZCIsIiRhcHBseSIsImVudGVyIiwibWV0aG9kcyIsInRlc3QiLCJzZW5kQ291bnQiLCJ1c2VySW5mb0NyZWF0ZUNvbm5lY3QiLCJjcmVhdGVDb25uZWN0IiwidXNlckluZm9FbnRlciIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdldHVzZXJpbmZvIiwiYWNjZWxlcmF0aW9uIiwibm93VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZGlmZlRpbWUiLCJzcGVlZCIsIk1hdGgiLCJhYnMiLCJzdG9wQWNjZWxlcm9tZXRlciIsImF1ZGlvQ29udGV4dCIsInBsYXkiLCJ0aW1lT3V0Iiwic2V0VGltZW91dCIsInRvYXN0IiwidGl0bGUiLCJpbWFnZSIsInN0YXJ0QWNjZWxlcm9tZXRlciIsInR5cGUiLCJtZXNzYWdlIiwiY3JlYXRlVXNlck1lc3NhZ2UiLCJzb2NrZXQiLCJlbWl0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJzcmMiLCJvbkFjY2VsZXJvbWV0ZXJDaGFuZ2UiLCJyZXMiLCJzaGFrZSIsIm5leHQiLCJjb250ZW50IiwiaWQiLCJ1cGRhdGVyIiwibGFzdE1lc3NhZ2VJZCIsImxlbmd0aCIsInVwZGF0ZU1lc3NhZ2VzIiwicHVzaCIsImR1cmF0aW9uIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJwYXlsb2FkIiwiZmFpbCIsImVycm9yIiwibWUiLCJlIiwiaG9zdG5hbWUiLCJvbiIsImQiLCJyZWFzb24iLCJhdHRlbXB0TnVtYmVyIiwicHVzaE1lc3NhZ2UiLCJjcmVhdGVTeXN0ZW1NZXNzYWdlIiwiZXJyIiwidGltZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY291bnRkb3duIiwibWFzayIsIm51bVVzZXJzIiwibmlja05hbWUiLCJvcHRpb25zIiwiZ2V0U3Ryb2FnZU9wZW5pZCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJjbG9zZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQVFxQkEsSyxXQU5wQix3QkFBUTtBQUNQQyxVQURPLG9CQUNHQyxLQURILEVBQ1U7QUFDZixXQUFPQSxNQUFNQyxJQUFOLENBQVdDLElBQWxCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7O29MQVFDQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyw4QkFBd0IsS0FIakI7QUFJUEMscUJBQWU7QUFFakI7QUFOUyxLLFFBT1RDLEksR0FBTztBQUNMQyxjQUFRLElBREg7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxlQUFTLElBSEo7QUFJTEMsZUFBUyxLQUpKO0FBS0xDLHNCQUFnQixLQUxYO0FBTUxDLFlBQU0sQ0FORDtBQU9MQyxTQUFHLENBUEU7QUFRTEMsU0FBRyxDQVJFO0FBU0xDLFNBQUcsQ0FURTtBQVVMQyxhQUFPLENBVkY7QUFXTEMsYUFBTyxDQVhGO0FBWUxDLGFBQU8sQ0FaRjtBQWFMQyxnQkFBVSxDQWJMO0FBY0xD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bmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IGlvIGZyb20gJ3dlYXBwLnNvY2tldC5pbydcbiAgaW1wb3J0IExvZ2luIGZyb20gJ0AvbWl4aW5zL2xvZ2luJ1xuICBpbXBvcnQgeyAkTWVzc2FnZSB9IGZyb20gJ3dlcHktaXZpZXcnXG4gIGltcG9ydCB7IEFQSSB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgeyBUSVBTIH0gZnJvbSAnd2VweS11dGlscydcbiAgaW1wb3J0IEdldFVzZXJJbmZvIGZyb20gJ0AvY29tcG9uZW50cy9nZXRVc2VySW5mbydcblxuICBAY29ubmVjdCh7XG4gICAgdXNlckluZm8gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUudXNlci5pbmZvXG4gICAgfVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWtlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDlj6rlnKggUGFnZSDlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoQgcGFnZS5qc29uIOaWh+S7tlxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNDQ0NDQ0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pGH5LiA5pGHJyxcbiAgICAgIGRpc2FibGVTY3JvbGw6IHRydWVcbiAgICB9XG4gICAgLy8g6aG16Z2i5omA6ZyA5pWw5o2u5Z2H6ZyA5Zyo6L+Z6YeM5aOw5piO77yM55So5LqO5qih5p2/5pWw5o2u57uR5a6aXG4gICAgZGF0YSA9IHtcbiAgICAgIG9wZW5pZDogbnVsbCxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIG1zZ1V1aWQ6IG51bGwsXG4gICAgICBpc1N0YXJ0OiBmYWxzZSxcbiAgICAgIGlzVXNlckluZm9TaG93OiBmYWxzZSxcbiAgICAgIG9wZW46IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHo6IDAsXG4gICAgICBsYXN0WDogMCxcbiAgICAgIGxhc3RZOiAwLFxuICAgICAgbGFzdFo6IDAsXG4gICAgICBsYXN0VGltZTogMCxcbiAgICAgIHNoYWtlU3BlZWQ6IDExMFxuICAgIH1cbiAgICAvLyBMb2dpbiBtaXhpbnNcbiAgICBtaXhpbnMgPSBbTG9naW5dXG4gICAgLy8g55uR5ZCsXG4gICAgd2F0Y2ggPSB7XG4gICAgICBvcGVuaWQgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnJvb21JZCA9IG5ld1ZhbHVlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHRoaXMuZW50ZXIoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOS6i+S7tuWkhOeQhuWHveaVsO+8iOmbhuS4reS/neWtmOWcqCBtZXRob2RzIOWvueixoeS4re+8iVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0ZXN0ICgpIHtcbiAgICAgICAgdGhpcy5zZW5kQ291bnQoKVxuICAgICAgfSxcbiAgICAgIHVzZXJJbmZvQ3JlYXRlQ29ubmVjdCAoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29ubmVjdCgpXG4gICAgICB9LFxuICAgICAgdXNlckluZm9FbnRlciAoKSB7XG4gICAgICAgIHRoaXMuZW50ZXIoKVxuICAgICAgfSxcbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu277yM5oiW5aOw5piO57uE5Lu25Lit5omA5byV55So55qE5a2Q57uE5Lu2XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImdldHVzZXJpbmZvXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wZW5pZC5zeW5jXCI6XCJvcGVuaWRcIixcInYtYmluZDppc1VzZXJJbmZvU2hvdy5zeW5jXCI6XCJpc1VzZXJJbmZvU2hvd1wifX07XHJcbiRldmVudHMgPSB7XCJnZXR1c2VyaW5mb1wiOntcInYtb246Y3JlYXRlQ29ubmVjdFwiOlwidXNlckluZm9DcmVhdGVDb25uZWN0XCIsXCJ2LW9uOmVudGVyXCI6XCJ1c2VySW5mb0VudGVyXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBnZXR1c2VyaW5mbzogR2V0VXNlckluZm9cbiAgICB9XG5cbiAgICBzaGFrZSAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBsZXQgbm93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICBpZiAobm93VGltZSAtIHRoaXMubGFzdFRpbWUgPiAxMDApIHtcbiAgICAgICAgbGV0IGRpZmZUaW1lID0gbm93VGltZSAtIHRoaXMubGFzdFRpbWVcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IG5vd1RpbWVcbiAgICAgICAgdGhpcy54ID0gYWNjZWxlcmF0aW9uLnhcbiAgICAgICAgdGhpcy55ID0gYWNjZWxlcmF0aW9uLnlcbiAgICAgICAgdGhpcy56ID0gYWNjZWxlcmF0aW9uLnpcbiAgICAgICAgLy8g6K6h566X6YCf546HXG4gICAgICAgIGxldCBzcGVlZCA9IE1hdGguYWJzKHRoaXMueCArIHRoaXMueSArIHRoaXMueiAtIHRoaXMubGFzdFggLSB0aGlzLmxhc3RZIC0gdGhpcy5sYXN0WikgLyBkaWZmVGltZSAqIDEwMDAwXG4gICAgICAgIC8vIOWmguaenOiuoeeul+WHuuadpeeahOmAn+W6pui2hei/h+S6humYiOWAvO+8jOmCo+S5iOWwseeul+S9nOeUqOaIt+aIkOWKn+aRh+S4gOaRh1xuICAgICAgICBpZiAoc3BlZWQgPiB0aGlzLnNoYWtlU3BlZWQpIHtcbiAgICAgICAgICB3ZXB5LnN0b3BBY2NlbGVyb21ldGVyKClcbiAgICAgICAgICAvLyDmkq3mlL7lo7Dpn7NcbiAgICAgICAgICB0aGlzLmF1ZGlvQ29udGV4dC5wbGF5KClcbiAgICAgICAgICB0aGlzLm9wZW4gPSAxMFxuICAgICAgICAgIGxldCB0aW1lT3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSAwXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAvLyDop6blj5HmkYfkuIDmkYfvvIxzb2NrZXQg5o6o6YCBICsxXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0YXJ0KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VuZENvdW50KClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFRJUFMudG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyq5byA5aeLJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJy4vaW1hZ2VzL2Nsb2NrLnBuZydcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWBnOatouWjsOmfs1xuICAgICAgICAgICAgLy8gdGhpcy5hdWRpb0NvbnRleHQuc3RvcCgpXG4gICAgICAgICAgICB3ZXB5LnN0YXJ0QWNjZWxlcm9tZXRlcigpXG4gICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0WCA9IHRoaXMueFxuICAgICAgICB0aGlzLmxhc3RZID0gdGhpcy55XG4gICAgICAgIHRoaXMubGFzdFogPSB0aGlzLnpcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cbiAgICBzZW5kQ291bnQgKCkge1xuICAgICAgbGV0IHR5cGUgPSAnc2hha2UnXG4gICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuY3JlYXRlVXNlck1lc3NhZ2UodHlwZSwgdGhpcy51c2VySW5mbylcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ25ldyBzaGFrZScsIG1lc3NhZ2UpXG4gICAgfVxuICAgIC8vIOWKoOmAn+W6plxuICAgIG9uQWNjZWxlcm9tZXRlckNoYW5nZSAoKSB7XG4gICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IHdlcHkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxuICAgICAgdGhpcy5hdWRpb0NvbnRleHQuc3JjID0gJ2h0dHBzOi8vaW1nLm1pZ29uZy5vcmcvc2hha2Uvc2hha2Vfc3RhcnQubXAzJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgd2VweS5vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UoKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNoYWtlKHJlcylcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIOeUn+aIkOS4gOadoeiBiuWkqeWupOeahOa2iOaBr+eahOWUr+S4gCBJRFxuICAgIG1zZ1V1aWQgKCkge1xuICAgICAgaWYgKCF0aGlzLm1zZ1V1aWQubmV4dCkge1xuICAgICAgICB0aGlzLm1zZ1V1aWQubmV4dCA9IDBcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgICAgcmV0dXJuICdtc2ctJyArICsrdGhpcy5tc2dVdWlkLm5leHRcbiAgICB9XG4gICAgLy8g55Sf5oiQ6IGK5aSp5a6k55qE57O757uf5raI5oGvXG4gICAgY3JlYXRlU3lzdGVtTWVzc2FnZSAoY29udGVudCkge1xuICAgICAgcmV0dXJuIHsgaWQ6IHRoaXMubXNnVXVpZCgpLCB0eXBlOiAnc3lzdGVtJywgY29udGVudCB9XG4gICAgfVxuICAgIC8vIOeUn+aIkOiBiuWkqeWupOeahOiBiuWkqea2iOaBr1xuICAgIGNyZWF0ZVVzZXJNZXNzYWdlICh0eXBlLCB1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZyh7dHlwZTogdHlwZSwgdXNlcn0pXG4gICAgICByZXR1cm4ge3R5cGU6IHR5cGUsIHVzZXJ9XG4gICAgfVxuICAgIC8vIOmAmueUqOabtOaWsOW9k+WJjea2iOaBr+mbhuWQiOeahOaWueazlVxuICAgIHVwZGF0ZU1lc3NhZ2VzICh1cGRhdGVyKSB7XG4gICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLmRhdGEubWVzc2FnZXNcbiAgICAgIHVwZGF0ZXIobWVzc2FnZXMpXG4gICAgICB0aGlzLiRhcHBseSgpXG5cbiAgICAgIC8vIOmcgOimgeWFiOabtOaWsCBtZXNzYWdlc3Mg5pWw5o2u5ZCO5YaN6K6+572u5rua5Yqo5L2N572u77yM5ZCm5YiZ5LiN6IO955Sf5pWIXG4gICAgICB0aGlzLmxhc3RNZXNzYWdlSWQgPSBtZXNzYWdlcy5sZW5ndGhcbiAgICAgICAgPyBtZXNzYWdlc1ttZXNzYWdlcy5sZW5ndGggLSAxXS5pZFxuICAgICAgICA6ICdub25lJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICAvLyDov73liqDkuIDmnaHmtojmga9cbiAgICBwdXNoTWVzc2FnZSAobWVzc2FnZSkge1xuICAgICAgdGhpcy51cGRhdGVNZXNzYWdlcyhtZXNzYWdlcyA9PiBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpKVxuICAgIH1cbiAgICAvLyDlkK/liqggU29ja2V0XG4gICAgZW50ZXIgKCkge1xuICAgICAgJE1lc3NhZ2Uoe1xuICAgICAgICBjb250ZW50OiAn5YeG5aSH5Yqg5YWlLi4uJyxcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgICBkdXJhdGlvbjogOTk5XG4gICAgICB9KVxuICAgICAgLy8g5aaC5p6c55m75b2V6L+H77yM5Lya6K6w5b2V5b2T5YmN55So5oi35ZyoIHRoaXMubWUg5LiKXG4gICAgICBpZiAoIXRoaXMudXNlckluZm8pIHtcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMudXNlckluZm9cbiAgICAgICAgICAgIGRhdGEub3BlbmlkID0gdGhpcy5vcGVuaWRcbiAgICAgICAgICAgIHdlcHkuJHN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnVVNFUklORk8nLCBwYXlsb2FkOiBkYXRhfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflkK/liqjmkYfkuIDmkYc6JywgZGF0YSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29ubmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNVc2VySW5mb1Nob3cgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbWU6OjonLCB0aGlzLm1lKVxuICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3QoKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDliJvlu7rov57mjqVcbiAgICBjcmVhdGVDb25uZWN0IChlKSB7XG4gICAgICAkTWVzc2FnZSh7XG4gICAgICAgIGNvbnRlbnQ6ICfmraPlnKjliqDlhaUuLi4nLFxuICAgICAgICB0eXBlOiAnZGVmYXVsdCdcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHNvY2tldCA9ICh0aGlzLnNvY2tldCA9IGlvKGAke0FQSS5ob3N0bmFtZX0/dHlwZT1zaGFrZSZyb29tSWQ9JHt0aGlzLnJvb21JZH1gKSlcblxuICAgICAgLy8g6L+e5o6l5oiQ5YqfXG4gICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICRNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiAn5Yqg5YWl5oiQ5YqfLi4uJyxcbiAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHR5cGUgPSAnam9pbidcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZVVzZXJNZXNzYWdlKHR5cGUsIHRoaXMudXNlckluZm8pXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ25ldyBzaGFrZScsIG1lc3NhZ2UpXG4gICAgICB9KVxuICAgICAgLy8g6L+e5o6l6ZSZ6K+vXG4gICAgICBzb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBkID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBg6L+e5o6l6ZSZ6K+vOiAke2R9YFxuICAgICAgICAkTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLy8g6L+e5o6l6LaF5pe2XG4gICAgICBzb2NrZXQub24oJ2Nvbm5lY3RfdGltZW91dCcsIGQgPT4ge1xuICAgICAgICBsZXQgY29udGVudCA9IGDov57mjqXotoXml7Y6ICR7ZH1gXG4gICAgICAgICRNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvLyDov57mjqXmlq3lvIBcbiAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIHJlYXNvbiA9PiB7XG4gICAgICAgIGxldCBjb250ZW50ID0gYOi/nuaOpeaWreW8gDogJHtyZWFzb259YFxuICAgICAgICAkTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvLyDph43mlrDov57mjqVcbiAgICAgIHNvY2tldC5vbigncmVjb25uZWN0JywgYXR0ZW1wdE51bWJlciA9PiB7XG4gICAgICAgIGxldCBjb250ZW50ID0gYOmHjeaWsOi/nuaOpTogJHthdHRlbXB0TnVtYmVyfWBcbiAgICAgICAgJE1lc3NhZ2Uoe1xuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBzb2NrZXQub24oJ3JlY29ubmVjdF9mYWlsZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKCdyZWNvbm5lY3RfZmFpbGVkJykpXG4gICAgICB9KVxuICAgICAgLy8g5pat5byA6YeN6L+eXG4gICAgICBzb2NrZXQub24oJ3JlY29ubmVjdF9hdHRlbXB0JywgKCkgPT4ge1xuICAgICAgICAkTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogJ+ato+WcqOWwneivlemHjei/ni4uLicsXG4gICAgICAgICAgdHlwZTogJ2RlZmF1bHQnXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLy8g6ZSZ6K+vXG4gICAgICBzb2NrZXQub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBg6ZSZ6K+vOiAke2Vycn1gXG4gICAgICAgICRNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvLyDnm5HlkKzlvIDlp4vlgJLorqHml7ZcbiAgICAgIHNvY2tldC5vbignc3RhcnQgY291bnRkb3duJywgZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfop6blj5HkuoblvIDlp4vlgJLorqHml7YnKVxuICAgICAgICBsZXQgdGltZSA9IDNcbiAgICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aW1lID09PSAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICAgICAgdGltZSA9IDNcbiAgICAgICAgICAgIC8vIOW8gOWni+WAkuiuoeaXtlxuICAgICAgICAgICAgdGhpcy5jb3VudGRvd24oKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUSVBTLnRvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcgICAgICAgJyxcbiAgICAgICAgICAgICAgaW1hZ2U6IGAuL2ltYWdlcy8ke3RpbWV9LnBuZ2AsXG4gICAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLS10aW1lXG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgfSlcbiAgICAgIC8vIOebkeWQrOiBiuWkqeWupOa2iOaBr1xuICAgICAgc29ja2V0Lm9uKCdsb2dpbicsIGQgPT4ge1xuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKFxuICAgICAgICAgIHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShg5oKo5bey5Yqg5YWl6IGK5aSp5a6k77yM5b2T5YmN5YWx5pyJICR7ZC5udW1Vc2Vyc30g5Lq6YClcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIC8vIOaOpeaUtuWIsOaWsOeahOiBiuWkqea2iOaBr1xuICAgICAgc29ja2V0Lm9uKCduZXcgc2hha2UnLCBkID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VyLCBtZXNzYWdlIH0gPSBkXG4gICAgICAgIGNvbnNvbGUubG9nKCfmjqXmlLbliLDmlrDmtojmga/vvJonLCBtZXNzYWdlKVxuICAgICAgICAvLyB0aGlzLnB1c2hNZXNzYWdlKHRoaXMuY3JlYXRlVXNlck1lc3NhZ2UobWVzc2FnZSwgdXNlcikpXG4gICAgICB9KVxuICAgICAgLy8g55So5oi36L+b5YWlXG4gICAgICBzb2NrZXQub24oJ3VzZXIgam9pbmVkJywgZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfmnaXkuobvvJonLCBkKVxuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKFxuICAgICAgICAgIHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShgJHtkLnVzZXIubmlja05hbWV9IOadpeS6hu+8jOW9k+WJjeWFseaciSAke2QubnVtVXNlcnN9IOS6umApXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICAvLyDnlKjmiLfnprvlvIBcbiAgICAgIHNvY2tldC5vbigndXNlciBsZWZ0JywgZCA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKGAke2QudXNlci5uaWNrTmFtZX0g56a75byA5LqG77yM5b2T5YmN5YWx5pyJICR7ZC5udW1Vc2Vyc30g5Lq6YClcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgXG4gICAgICBzb2NrZXQuZW1pdCgnYWRkIHVzZXInLCB0aGlzLnVzZXJJbmZvKVxuICAgIH1cbiAgICAvLyDlgJLorqHml7ZcbiAgICBjb3VudGRvd24gKCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZVxuICAgICAgbGV0IHRpbWUgPSAzMFxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgLS10aW1lXG4gICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgICAvLyDlnKggUGFnZSDlkowgQ29tcG9uZW50IOWFseeUqOeahOeUn+WRveWRqOacn+WHveaVsFxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMucm9vbUlkKSB7XG4gICAgICAgIHRoaXMucm9vbUlkID0gb3B0aW9ucy5yb29tSWRcbiAgICAgICAgdGhpcy5nZXRTdHJvYWdlT3BlbmlkKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOiOt+WPlue8k+WtmOS4reeahCBvcGVuaWQg6LWL5YC857uZIHJvb21JZFxuICAgICAgICB0aGlzLmdldFN0cm9hZ2VPcGVuaWQoKVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgdGhpcy5vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UoKVxuXG4gICAgICB3ZXB5LnNob3dTaGFyZU1lbnUoe1xuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkIFNoYWtlLi4uJylcbiAgICB9XG4gICAgLy8g55uR5ZCs6aG16Z2i5Y246L29XG4gICAgb25VbmxvYWQgKCkge1xuICAgICAgLy8g5Li75Yqo5pat5byAIHNvY2tldFxuICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKVxuICAgIH1cbiAgfVxuIl19