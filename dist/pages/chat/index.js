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

var _wepyUtils = require('./../../npm/wepy-utils/index.js');

var _wepyIview = require('./../../npm/wepy-iview/index.js');

var _common = require('./../../common/index.js');

var _login = require('./../../mixins/login.js');

var _login2 = _interopRequireDefault(_login);

var _getUserInfo = require('./../../components/getUserInfo.js');

var _getUserInfo2 = _interopRequireDefault(_getUserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 又拍云SDK
var upyun = new _common.Upyun({
  bucket: 'migongorg-img-serve',
  operator: 'chat',
  getSignatureUrl: _common.API.upyun
});

var Chat = (_dec = (0, _wepyRedux.connect)({
  userInfo: function userInfo(state) {
    return state.user.info;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Chat, _wepy$page);

  function Chat() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Chat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chat.__proto__ || Object.getPrototypeOf(Chat)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '聊天室',
      disableScroll: true
      // 页面所需数据均需在这里声明，用于模板数据绑定
    }, _this.data = {
      systemInfo: {},
      openid: null,
      isUserInfoShow: false,
      extendPanelHeight: 0,
      msgUuid: null,
      inputContent: '',
      messages: [],
      lastMessageId: 'none',
      extendIsShow: null,
      faces: [[{ name: '微笑', index: 0 }, { name: '憨笑', index: 1 }, { name: '调皮', index: 2 }, { name: '流汗', index: 3 }, { name: '真香', index: 4 }, { name: '严肃', index: 5 }, { name: '愤怒', index: 6 }, { name: '撇嘴', index: 7 }, { name: '委屈', index: 8 }, { name: '难过', index: 9 }, { name: '流泪', index: 10 }, { name: '尴尬', index: 11 }, { name: '呲牙', index: 12 }, { name: '坏笑', index: 13 }, { name: '阴险', index: 14 }, { name: '呕吐', index: 15 }, { name: '装睡', index: 16 }, { name: '发呆', index: 17 }, { name: '傲慢', index: 18 }, { name: '闭嘴', index: 19 }, { name: '偷笑', index: 20 }, { name: '可爱', index: 21 }, { name: '惊讶', index: 22 }, { name: '比心', index: 23 }, { name: '心碎', index: 24 }, { name: '喝彩', index: 25 }, { name: '鞭炮', index: 26 }, { name: '阳光', index: 27 }, { name: '啤酒', index: 28 }, { name: '色眯眯', index: 29 }, { name: '亲亲', index: 30 }, { name: '嘴唇', index: 31 }, { name: '玫瑰', index: 32 }, { name: '凋谢', index: 33 }, { name: '秀儿', index: 34 }]],
      facesKey: {
        '[微笑]': 0,
        '[憨笑]': 1,
        '[调皮]': 2,
        '[流汗]': 3,
        '[真香]': 4,
        '[严肃]': 5,
        '[愤怒]': 6,
        '[撇嘴]': 7,
        '[委屈]': 8,
        '[难过]': 9,
        '[流泪]': 10,
        '[尴尬]': 11,
        '[呲牙]': 12,
        '[坏笑]': 13,
        '[阴险]': 14,
        '[呕吐]': 15,
        '[装睡]': 16,
        '[发呆]': 17,
        '[傲慢]': 18,
        '[闭嘴]': 19,
        '[偷笑]': 20,
        '[可爱]': 21,
        '[惊讶]': 22,
        '[比心]': 23,
        '[心碎]': 24,
        '[喝彩]': 25,
        '[鞭炮]': 26,
        '[阳光]': 27,
        '[啤酒]': 28,
        '[色眯眯]': 29,
        '[亲亲]': 30,
        '[嘴唇]': 31,
        '[玫瑰]': 32,
        '[凋谢]': 33,
        '[秀儿]': 34
      }
      // Login mixins
    }, _this.mixins = [_login2.default], _this.watch = {
      openid: function openid(newValue, oldValue) {
        console.log(newValue, oldValue);
        if (!this.roomId) {
          this.roomId = newValue;
          this.$apply();
          this.enter();
        } else {
          this.enter();
        }
      }
    }, _this.methods = {
      userInfoCreateConnect: function userInfoCreateConnect() {
        this.createConnect();
      },
      userInfoEnter: function userInfoEnter() {
        this.enter();
      },

      // 向输入框中添加表情符号
      addFace: function addFace(e) {
        var faceName = e.currentTarget.dataset.name;
        this.inputContent += faceName;
        this.$apply();
      },

      // 从本地相册选择图片或使用相机拍照
      chooseImage: function chooseImage() {
        var _this2 = this;

        _wepy2.default.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var tempPicturePaths = res.tempFilePaths[0];
            _wepy2.default.getImageInfo({
              src: tempPicturePaths,
              success: function success(res) {
                var pictureInfo = {
                  width: res.width,
                  height: res.height,
                  loading: true
                };
                _this2.uploadPicture(tempPicturePaths, pictureInfo);
              }
            });
          },
          fail: function fail(error) {
            console.log('从本地相册选择图片或使用相机拍照：', error);
          }
        });
      },

      // 显示或隐藏扩展功能
      showExtendPanel: function showExtendPanel(value) {
        if (this.extendIsShow === value) {
          this.extendIsShow = null;
          this.extendPanelHeight = 0;
        } else if (value === 'face') {
          this.extendIsShow = value;
          this.extendPanelHeight = 340;
        } else if (value === 'more') {
          this.extendIsShow = value;
          this.extendPanelHeight = 210;
        }
        this.$apply();
      },
      imageOnLoad: function imageOnLoad(e) {
        var index = e.target.dataset.index;
        // 隐藏 loading 动画
        this.messages[index].pictureInfo.loading = false;
        this.$apply();
      },
      imageOnLoadError: function imageOnLoadError(error) {
        console.log('图片加载失败', error);
      },
      handleChatContainer: function handleChatContainer() {
        this.hiddenExtendPanel();
      },
      input: function input(e) {
        this.inputContent = e.detail.value;
        this.$apply();
      },

      // 输入框获取焦点
      inputFocus: function inputFocus() {
        console.log('获取焦点');
      },

      // 输入框失去焦点
      inputBlur: function inputBlur() {
        console.log('失去焦点');
      },

      // 发送消息
      sendMessage: function sendMessage(e) {
        console.log('发送消息：', e);
        var msg = e.detail.value;
        if (!msg) {
          return;
        }

        var content = this.strSplit(msg);

        var message = this.createUserMessage(content, this.userInfo);
        this.socket.emit('new message', message);
        this.pushMessage(message);
        // 清空输入框
        this.inputContent = '';
        this.$apply();
      },

      // 预览图片
      previewPicture: function previewPicture(index) {
        var url = 'https://img.migong.org' + this.messages[index].content;
        _wepy2.default.previewImage({
          current: url,
          urls: [url]
        });
      }
    }, _this.$repeat = {}, _this.$props = { "getuserinfo": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:openid.sync": "openid", "v-bind:isUserInfoShow.sync": "isUserInfoShow" } }, _this.$events = { "getuserinfo": { "v-on:createConnect": "userInfoCreateConnect", "v-on:enter": "userInfoEnter" } }, _this.components = {
      getuserinfo: _getUserInfo2.default
      // 上传图片到又拍云
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // 监听

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(Chat, [{
    key: 'uploadPicture',
    value: function uploadPicture(picture, pictureInfo) {
      var _this3 = this;

      _wepy2.default.showLoading({
        title: '上传中...',
        mask: true
      });
      // 隐藏底部扩展功能面板
      this.extendIsShow = null;
      this.extendPanelHeight = 0;
      this.$apply();
      var path = '/chat-images';
      // 时间格式路径
      var timePath = this.handleDate('path');
      upyun.upload({
        localPath: picture,
        remotePath: path + '/' + timePath,
        success: function success(res) {
          _wepy2.default.hideLoading();
          var data = JSON.parse(res.data);
          var url = data.url;
          var type = 'picture';
          var message = _this3.createUserMessage(url, _this3.userInfo, type, pictureInfo);
          _this3.socket.emit('new message', message);
          _this3.pushMessage(message);

          _wepyUtils.TIPS.toast({
            icon: 'SUCCESS',
            title: '发送成功'
          });
        },
        fail: function fail(_ref2) {
          var errMsg = _ref2.errMsg;

          console.log(errMsg);
        }
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
    value: function createUserMessage(content, user, type, pictureInfo, isMe) {
      var time = this.handleDate('time');
      var id = this.msgUuid();
      console.log({ id: id, type: type ? type : 'speak', content: content, user: user, isMe: isMe, time: time, pictureInfo: pictureInfo });
      return { id: id, type: type ? type : 'speak', content: content, user: user, isMe: isMe, time: time, pictureInfo: pictureInfo };
    }
    // 启动聊天室

  }, {
    key: 'enter',
    value: function enter() {
      var _this4 = this;

      this.pushMessage(this.createSystemMessage('正在登录...'));
      // 如果登录过，会记录当前用户在 this.me 上
      if (!this.userInfo) {
        _wepy2.default.getUserInfo({
          success: function success(res) {
            var data = res.userInfo;
            data.openid = _this4.openid;
            _wepy2.default.$store.dispatch({ type: 'USERINFO', payload: data });

            console.log('启动聊天室:', data);
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

    // 替换上一条消息

  }, {
    key: 'amendMessage',
    value: function amendMessage(message) {
      this.updateMessages(function (messages) {
        return messages.splice(-1, 1, message);
      });
    }

    // 删除上一条消息

  }, {
    key: 'popMessage',
    value: function popMessage() {
      this.updateMessages(function (messages) {
        return messages.pop();
      });
    }
    // 监听 input 输入内容

  }, {
    key: 'changeInputContent',
    value: function changeInputContent(e) {
      this.inputContent = e.detail.value;
      this.$apply();
    }
    // 创建连接

  }, {
    key: 'createConnect',
    value: function createConnect(e) {
      var _this5 = this;

      this.amendMessage(this.createSystemMessage('正在加入群聊...'));

      var socket = this.socket = (0, _weappSocket2.default)(_common.API.hostname + '?type=chat&roomId=' + this.roomId);

      // 连接成功
      socket.on('connect', function () {
        _this5.popMessage();
        _this5.pushMessage(_this5.createSystemMessage('连接成功'));
      });
      // 连接错误
      socket.on('connect_error', function (d) {
        _this5.pushMessage(_this5.createSystemMessage('connect_error: ' + d));
      });
      // 连接超时
      socket.on('connect_timeout', function (d) {
        _this5.pushMessage(_this5.createSystemMessage('connect_timeout: ' + d));
      });
      // 连接断开
      socket.on('disconnect', function (reason) {
        _this5.pushMessage(_this5.createSystemMessage('disconnect: ' + reason));
      });
      // 重新连接
      socket.on('reconnect', function (attemptNumber) {
        _this5.pushMessage(_this5.createSystemMessage('reconnect success: ' + attemptNumber));
      });

      socket.on('reconnect_failed', function () {
        _this5.pushMessage(_this5.createSystemMessage('reconnect_failed'));
      });
      // 断开重连
      socket.on('reconnect_attempt', function () {
        _this5.pushMessage(_this5.createSystemMessage('正在尝试重连'));
      });
      // 错误
      socket.on('error', function (err) {
        _this5.pushMessage(_this5.createSystemMessage('error: ' + err));
      });
      // 监听聊天室消息
      socket.on('login', function (d) {
        _this5.pushMessage(_this5.createSystemMessage('\u60A8\u5DF2\u52A0\u5165\u804A\u5929\u5BA4\uFF0C\u5F53\u524D\u5171\u6709 ' + d.numUsers + ' \u4EBA'));
      });
      // 接收到新的聊天消息
      socket.on('new message', function (d) {
        var user = d.user,
            message = d.message;

        console.log('接收到新消息：', message);
        _this5.pushMessage(message);
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

      socket.on('typing', function (d) {});

      socket.on('stop typing', function (d) {});
      socket.emit('add user', this.userInfo);
    }
    // 隐藏扩展面板

  }, {
    key: 'hiddenExtendPanel',
    value: function hiddenExtendPanel() {
      this.extendIsShow = null;
      this.extendPanelHeight = 0;
      this.$apply();
    }
    // 转发带参数（判断是否是转发来源）

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: this.userInfo.nickName + ' \u9080\u8BF7\u4F60\u52A0\u5165\u804A\u5929\u5BA4',
        path: '/pages/chat/index?roomId=' + this.roomId,
        imageUrl: './images/chat_share.png'
      };
    }
    // 聊天文本拆分（将字符串拆分成数组）

  }, {
    key: 'strSplit',
    value: function strSplit(str) {
      var result = '';
      var arr = str.split(/(\[[^\[\]]*\])/g);
      for (var i = 0; i < arr.length; i++) {
        var isFace = arr[i].match(/\[[^\[\]]*\]/g);
        if (isFace) {
          result += '<img class="emoji" src="https://img.migong.org/chat/faces/' + this.facesKey[isFace[0]] + '.png">';
        } else {
          if (arr[i]) {
            result += '<span>' + arr[i] + '</span>';
          }
        }
      }
      console.log('result:', result);
      return result;
    }
    // 处理时间格式

  }, {
    key: 'handleDate',
    value: function handleDate(type) {
      var date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var hh = date.getHours();
      var mm = date.getMinutes();
      var ss = date.getSeconds();
      var result = '';
      if (type === 'time') {
        // 聊天展示日期
        result = y + '/' + m + '/' + d + ' ' + hh + ':' + mm + ':' + ss;
      } else if (type === 'path') {
        // 又拍云（图片存储路径）
        var time = date.getTime();
        result = y + '/' + m + '/' + d + '/' + time;
      }
      return result;
    }
    // 在 Page 和 Component 共用的生命周期函数

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      console.log('options:', options);
      if (options.roomId) {
        this.roomId = options.roomId;
        this.getStroageOpenid();
      } else {
        // 获取缓存中的 openid 赋值给 roomId
        this.getStroageOpenid();
      }
      // 获取设备信息
      this.systemInfo = _wepy2.default.$instance.globalData.systemInfo;
      this.$apply();
    }
    // 监听页面卸载

  }, {
    key: 'onUnload',
    value: function onUnload() {
      // 主动断开 socket
      this.socket.close();
    }
  }]);

  return Chat;
}(_wepy2.default.page)) || _class);

Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Chat , 'pages/chat/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInVweXVuIiwiYnVja2V0Iiwib3BlcmF0b3IiLCJnZXRTaWduYXR1cmVVcmwiLCJDaGF0IiwidXNlckluZm8iLCJzdGF0ZSIsInVzZXIiLCJpbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRpc2FibGVTY3JvbGwiLCJkYXRhIiwic3lzdGVtSW5mbyIsIm9wZW5pZCIsImlzVXNlckluZm9TaG93IiwiZXh0ZW5kUGFuZWxIZWlnaHQiLCJtc2dVdWlkIiwiaW5wdXRDb250ZW50IiwibWVzc2FnZXMiLCJsYXN0TWVzc2FnZUlkIiwiZXh0ZW5kSXNTaG93IiwiZmFjZXMiLCJuYW1lIiwiaW5kZXgiLCJmYWNlc0tleSIsIm1peGlucyIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyb29tSWQiLCIkYXBwbHkiLCJlbnRlciIsIm1ldGhvZHMiLCJ1c2VySW5mb0NyZWF0ZUNvbm5lY3QiLCJjcmVhdGVDb25uZWN0IiwidXNlckluZm9FbnRlciIsImFkZEZhY2UiLCJlIiwiZmFjZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcFBpY3R1cmVQYXRocyIsInRlbXBGaWxlUGF0aHMiLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJwaWN0dXJlSW5mbyIsIndpZHRoIiwiaGVpZ2h0IiwibG9hZGluZyIsInVwbG9hZFBpY3R1cmUiLCJmYWlsIiwiZXJyb3IiLCJzaG93RXh0ZW5kUGFuZWwiLCJ2YWx1ZSIsImltYWdlT25Mb2FkIiwidGFyZ2V0IiwiaW1hZ2VPbkxvYWRFcnJvciIsImhhbmRsZUNoYXRDb250YWluZXIiLCJoaWRkZW5FeHRlbmRQYW5lbCIsImlucHV0IiwiZGV0YWlsIiwiaW5wdXRGb2N1cyIsImlucHV0Qmx1ciIsInNlbmRNZXNzYWdlIiwibXNnIiwiY29udGVudCIsInN0clNwbGl0IiwibWVzc2FnZSIsImNyZWF0ZVVzZXJNZXNzYWdlIiwic29ja2V0IiwiZW1pdCIsInB1c2hNZXNzYWdlIiwicHJldmlld1BpY3R1cmUiLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdldHVzZXJpbmZvIiwicGljdHVyZSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicGF0aCIsInRpbWVQYXRoIiwiaGFuZGxlRGF0ZSIsInVwbG9hZCIsImxvY2FsUGF0aCIsInJlbW90ZVBhdGgiLCJoaWRlTG9hZGluZyIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJ0b2FzdCIsImljb24iLCJlcnJNc2ciLCJuZXh0IiwiaWQiLCJpc01lIiwidGltZSIsImNyZWF0ZVN5c3RlbU1lc3NhZ2UiLCJnZXRVc2VySW5mbyIsIiRzdG9yZSIsImRpc3BhdGNoIiwicGF5bG9hZCIsIm1lIiwidXBkYXRlciIsImxlbmd0aCIsInVwZGF0ZU1lc3NhZ2VzIiwicHVzaCIsInNwbGljZSIsInBvcCIsImFtZW5kTWVzc2FnZSIsImhvc3RuYW1lIiwib24iLCJwb3BNZXNzYWdlIiwiZCIsInJlYXNvbiIsImF0dGVtcHROdW1iZXIiLCJlcnIiLCJudW1Vc2VycyIsIm5pY2tOYW1lIiwiZnJvbSIsImltYWdlVXJsIiwic3RyIiwicmVzdWx0IiwiYXJyIiwic3BsaXQiLCJpIiwiaXNGYWNlIiwibWF0Y2giLCJkYXRlIiwiRGF0ZSIsInkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImdldERhdGUiLCJoaCIsImdldEhvdXJzIiwibW0iLCJnZXRNaW51dGVzIiwic3MiLCJnZXRTZWNvbmRzIiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJnZXRTdHJvYWdlT3BlbmlkIiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImNsb3NlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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Q0EsYUFBSzhILGdCQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0w7QUFDQSxhQUFLQSxnQkFBTDtBQUNEO0FBQ0Q7QUFDQSxXQUFLakosVUFBTCxHQUFrQixlQUFLa0osU0FBTCxDQUFlQyxVQUFmLENBQTBCbkosVUFBNUM7QUFDQSxXQUFLb0IsTUFBTDtBQUNEO0FBQ0Q7Ozs7K0JBQ1k7QUFDVjtBQUNBLFdBQUs2QyxNQUFMLENBQVltRixLQUFaO0FBQ0Q7Ozs7RUE1ZCtCLGVBQUtDLEk7a0JBQWxCOUosSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IGlvIGZyb20gJ3dlYXBwLnNvY2tldC5pbydcbiAgaW1wb3J0IHsgVElQUyB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCB7ICRNZXNzYWdlIH0gZnJvbSAnd2VweS1pdmlldydcbiAgaW1wb3J0IHsgVXB5dW4sIEFQSSB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgTG9naW4gZnJvbSAnQC9taXhpbnMvbG9naW4nXG4gIGltcG9ydCBHZXRVc2VySW5mbyBmcm9tICdAL2NvbXBvbmVudHMvZ2V0VXNlckluZm8nXG5cbiAgLy8g5Y+I5ouN5LqRU0RLXG4gIGNvbnN0IHVweXVuID0gbmV3IFVweXVuKHtcbiAgICBidWNrZXQ6ICdtaWdvbmdvcmctaW1nLXNlcnZlJyxcbiAgICBvcGVyYXRvcjogJ2NoYXQnLFxuICAgIGdldFNpZ25hdHVyZVVybDogQVBJLnVweXVuXG4gIH0pXG5cbiAgQGNvbm5lY3Qoe1xuICAgIHVzZXJJbmZvIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnVzZXIuaW5mb1xuICAgIH1cbiAgfSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDlj6rlnKggUGFnZSDlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoQgcGFnZS5qc29uIOaWh+S7tlxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnLFxuICAgICAgZGlzYWJsZVNjcm9sbDogdHJ1ZVxuICAgIH1cbiAgICAvLyDpobXpnaLmiYDpnIDmlbDmja7lnYfpnIDlnKjov5nph4zlo7DmmI7vvIznlKjkuo7mqKHmnb/mlbDmja7nu5HlrppcbiAgICBkYXRhID0ge1xuICAgICAgc3lzdGVtSW5mbzoge30sXG4gICAgICBvcGVuaWQ6IG51bGwsXG4gICAgICBpc1VzZXJJbmZvU2hvdzogZmFsc2UsXG4gICAgICBleHRlbmRQYW5lbEhlaWdodDogMCxcbiAgICAgIG1zZ1V1aWQ6IG51bGwsXG4gICAgICBpbnB1dENvbnRlbnQ6ICcnLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgbGFzdE1lc3NhZ2VJZDogJ25vbmUnLFxuICAgICAgZXh0ZW5kSXNTaG93OiBudWxsLFxuICAgICAgZmFjZXM6IFtcbiAgICAgICAgW1xuICAgICAgICAgIHtuYW1lOiAn5b6u56yRJywgaW5kZXg6IDB9LFxuICAgICAgICAgIHtuYW1lOiAn5oao56yRJywgaW5kZXg6IDF9LFxuICAgICAgICAgIHtuYW1lOiAn6LCD55quJywgaW5kZXg6IDJ9LFxuICAgICAgICAgIHtuYW1lOiAn5rWB5rGXJywgaW5kZXg6IDN9LFxuICAgICAgICAgIHtuYW1lOiAn55yf6aaZJywgaW5kZXg6IDR9LFxuICAgICAgICAgIHtuYW1lOiAn5Lil6IKDJywgaW5kZXg6IDV9LFxuICAgICAgICAgIHtuYW1lOiAn5oSk5oCSJywgaW5kZXg6IDZ9LFxuICAgICAgICAgIHtuYW1lOiAn5pKH5Zi0JywgaW5kZXg6IDd9LFxuICAgICAgICAgIHtuYW1lOiAn5aeU5bGIJywgaW5kZXg6IDh9LFxuICAgICAgICAgIHtuYW1lOiAn6Zq+6L+HJywgaW5kZXg6IDl9LFxuICAgICAgICAgIHtuYW1lOiAn5rWB5rOqJywgaW5kZXg6IDEwfSxcbiAgICAgICAgICB7bmFtZTogJ+WwtOWwrCcsIGluZGV4OiAxMX0sXG4gICAgICAgICAge25hbWU6ICflkbLniZknLCBpbmRleDogMTJ9LFxuICAgICAgICAgIHtuYW1lOiAn5Z2P56yRJywgaW5kZXg6IDEzfSxcbiAgICAgICAgICB7bmFtZTogJ+mYtOmZqScsIGluZGV4OiAxNH0sXG4gICAgICAgICAge25hbWU6ICflkZXlkJAnLCBpbmRleDogMTV9LFxuICAgICAgICAgIHtuYW1lOiAn6KOF552hJywgaW5kZXg6IDE2fSxcbiAgICAgICAgICB7bmFtZTogJ+WPkeWRhicsIGluZGV4OiAxN30sXG4gICAgICAgICAge25hbWU6ICflgrLmhaInLCBpbmRleDogMTh9LFxuICAgICAgICAgIHtuYW1lOiAn6Zet5Zi0JywgaW5kZXg6IDE5fSxcbiAgICAgICAgICB7bmFtZTogJ+WBt+eskScsIGluZGV4OiAyMH0sXG4gICAgICAgICAge25hbWU6ICflj6/niLEnLCBpbmRleDogMjF9LFxuICAgICAgICAgIHtuYW1lOiAn5oOK6K62JywgaW5kZXg6IDIyfSxcbiAgICAgICAgICB7bmFtZTogJ+avlOW/gycsIGluZGV4OiAyM30sXG4gICAgICAgICAge25hbWU6ICflv4Pnoo4nLCBpbmRleDogMjR9LFxuICAgICAgICAgIHtuYW1lOiAn5Zad5b2pJywgaW5kZXg6IDI1fSxcbiAgICAgICAgICB7bmFtZTogJ+mereeCricsIGluZGV4OiAyNn0sXG4gICAgICAgICAge25hbWU6ICfpmLPlhYknLCBpbmRleDogMjd9LFxuICAgICAgICAgIHtuYW1lOiAn5ZWk6YWSJywgaW5kZXg6IDI4fSxcbiAgICAgICAgICB7bmFtZTogJ+iJsuecr+ecrycsIGluZGV4OiAyOX0sXG4gICAgICAgICAge25hbWU6ICfkurLkurInLCBpbmRleDogMzB9LFxuICAgICAgICAgIHtuYW1lOiAn5Zi05ZSHJywgaW5kZXg6IDMxfSxcbiAgICAgICAgICB7bmFtZTogJ+eOq+eRsCcsIGluZGV4OiAzMn0sXG4gICAgICAgICAge25hbWU6ICflh4vosKInLCBpbmRleDogMzN9LFxuICAgICAgICAgIHtuYW1lOiAn56eA5YS/JywgaW5kZXg6IDM0fVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgZmFjZXNLZXk6IHtcbiAgICAgICAgJ1vlvq7nrJFdJzogMCxcbiAgICAgICAgJ1vmhqjnrJFdJzogMSxcbiAgICAgICAgJ1vosIPnmq5dJzogMixcbiAgICAgICAgJ1vmtYHmsZddJzogMyxcbiAgICAgICAgJ1vnnJ/pppldJzogNCxcbiAgICAgICAgJ1vkuKXogoNdJzogNSxcbiAgICAgICAgJ1vmhKTmgJJdJzogNixcbiAgICAgICAgJ1vmkoflmLRdJzogNyxcbiAgICAgICAgJ1vlp5TlsYhdJzogOCxcbiAgICAgICAgJ1vpmr7ov4ddJzogOSxcbiAgICAgICAgJ1vmtYHms6pdJzogMTAsXG4gICAgICAgICdb5bC05bCsXSc6IDExLFxuICAgICAgICAnW+WRsueJmV0nOiAxMixcbiAgICAgICAgJ1vlnY/nrJFdJzogMTMsXG4gICAgICAgICdb6Zi06ZmpXSc6IDE0LFxuICAgICAgICAnW+WRleWQkF0nOiAxNSxcbiAgICAgICAgJ1voo4XnnaFdJzogMTYsXG4gICAgICAgICdb5Y+R5ZGGXSc6IDE3LFxuICAgICAgICAnW+WCsuaFol0nOiAxOCxcbiAgICAgICAgJ1vpl63lmLRdJzogMTksXG4gICAgICAgICdb5YG356yRXSc6IDIwLFxuICAgICAgICAnW+WPr+eIsV0nOiAyMSxcbiAgICAgICAgJ1vmg4rorrZdJzogMjIsXG4gICAgICAgICdb5q+U5b+DXSc6IDIzLFxuICAgICAgICAnW+W/g+eijl0nOiAyNCxcbiAgICAgICAgJ1vllp3lvaldJzogMjUsXG4gICAgICAgICdb6Z6t54KuXSc6IDI2LFxuICAgICAgICAnW+mYs+WFiV0nOiAyNyxcbiAgICAgICAgJ1vllaTphZJdJzogMjgsXG4gICAgICAgICdb6Imy55yv55yvXSc6IDI5LFxuICAgICAgICAnW+S6suS6sl0nOiAzMCxcbiAgICAgICAgJ1vlmLTllIddJzogMzEsXG4gICAgICAgICdb546r55GwXSc6IDMyLFxuICAgICAgICAnW+WHi+iwol0nOiAzMyxcbiAgICAgICAgJ1vnp4DlhL9dJzogMzRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gTG9naW4gbWl4aW5zXG4gICAgbWl4aW5zID0gW0xvZ2luXVxuICAgIC8vIOebkeWQrFxuICAgIHdhdGNoID0ge1xuICAgICAgb3BlbmlkIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICBpZiAoIXRoaXMucm9vbUlkKSB7XG4gICAgICAgICAgdGhpcy5yb29tSWQgPSBuZXdWYWx1ZVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB0aGlzLmVudGVyKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVudGVyKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDkuovku7blpITnkIblh73mlbDvvIjpm4bkuK3kv53lrZjlnKggbWV0aG9kcyDlr7nosaHkuK3vvIlcbiAgICBtZXRob2RzID0ge1xuICAgICAgdXNlckluZm9DcmVhdGVDb25uZWN0ICgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb25uZWN0KClcbiAgICAgIH0sXG4gICAgICB1c2VySW5mb0VudGVyICgpIHtcbiAgICAgICAgdGhpcy5lbnRlcigpXG4gICAgICB9LFxuICAgICAgLy8g5ZCR6L6T5YWl5qGG5Lit5re75Yqg6KGo5oOF56ym5Y+3XG4gICAgICBhZGRGYWNlIChlKSB7XG4gICAgICAgIGxldCBmYWNlTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVcbiAgICAgICAgdGhpcy5pbnB1dENvbnRlbnQgKz0gZmFjZU5hbWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIC8vIOS7juacrOWcsOebuOWGjOmAieaLqeWbvueJh+aIluS9v+eUqOebuOacuuaLjeeFp1xuICAgICAgY2hvb3NlSW1hZ2UgKCkge1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wUGljdHVyZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIHdlcHkuZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgICAgc3JjOiB0ZW1wUGljdHVyZVBhdGhzLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBpY3R1cmVJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogcmVzLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRQaWN0dXJlKHRlbXBQaWN0dXJlUGF0aHMsIHBpY3R1cmVJbmZvKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5LuO5pys5Zyw55u45YaM6YCJ5oup5Zu+54mH5oiW5L2/55So55u45py65ouN54Wn77yaJywgZXJyb3IpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOaYvuekuuaIlumakOiXj+aJqeWxleWKn+iDvVxuICAgICAgc2hvd0V4dGVuZFBhbmVsICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5leHRlbmRJc1Nob3cgPT09IHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5leHRlbmRJc1Nob3cgPSBudWxsXG4gICAgICAgICAgdGhpcy5leHRlbmRQYW5lbEhlaWdodCA9IDBcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhY2UnKSB7XG4gICAgICAgICAgdGhpcy5leHRlbmRJc1Nob3cgPSB2YWx1ZVxuICAgICAgICAgIHRoaXMuZXh0ZW5kUGFuZWxIZWlnaHQgPSAzNDBcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ21vcmUnKSB7XG4gICAgICAgICAgdGhpcy5leHRlbmRJc1Nob3cgPSB2YWx1ZVxuICAgICAgICAgIHRoaXMuZXh0ZW5kUGFuZWxIZWlnaHQgPSAyMTBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgaW1hZ2VPbkxvYWQgKGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICAvLyDpmpDol48gbG9hZGluZyDliqjnlLtcbiAgICAgICAgdGhpcy5tZXNzYWdlc1tpbmRleF0ucGljdHVyZUluZm8ubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBpbWFnZU9uTG9hZEVycm9yIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygn5Zu+54mH5Yqg6L295aSx6LSlJywgZXJyb3IpXG4gICAgICB9LFxuICAgICAgaGFuZGxlQ2hhdENvbnRhaW5lciAoKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRXh0ZW5kUGFuZWwoKVxuICAgICAgfSxcbiAgICAgIGlucHV0IChlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRDb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIC8vIOi+k+WFpeahhuiOt+WPlueEpueCuVxuICAgICAgaW5wdXRGb2N1cyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnhKbngrknKVxuICAgICAgfSxcbiAgICAgIC8vIOi+k+WFpeahhuWkseWOu+eEpueCuVxuICAgICAgaW5wdXRCbHVyICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+WkseWOu+eEpueCuScpXG4gICAgICB9LFxuICAgICAgLy8g5Y+R6YCB5raI5oGvXG4gICAgICBzZW5kTWVzc2FnZSAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygn5Y+R6YCB5raI5oGv77yaJywgZSlcbiAgICAgICAgY29uc3QgbXNnID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgaWYgKCFtc2cpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5zdHJTcGxpdChtc2cpXG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZVVzZXJNZXNzYWdlKGNvbnRlbnQsIHRoaXMudXNlckluZm8pXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ25ldyBtZXNzYWdlJywgbWVzc2FnZSlcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAvLyDmuIXnqbrovpPlhaXmoYZcbiAgICAgICAgdGhpcy5pbnB1dENvbnRlbnQgPSAnJ1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgLy8g6aKE6KeI5Zu+54mHXG4gICAgICBwcmV2aWV3UGljdHVyZSAoaW5kZXgpIHtcbiAgICAgICAgbGV0IHVybCA9IGBodHRwczovL2ltZy5taWdvbmcub3JnJHt0aGlzLm1lc3NhZ2VzW2luZGV4XS5jb250ZW50fWBcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IHVybCxcbiAgICAgICAgICB1cmxzOiBbdXJsXVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7bvvIzmiJblo7DmmI7nu4Tku7bkuK3miYDlvJXnlKjnmoTlrZDnu4Tku7ZcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ2V0dXNlcmluZm9cIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3BlbmlkLnN5bmNcIjpcIm9wZW5pZFwiLFwidi1iaW5kOmlzVXNlckluZm9TaG93LnN5bmNcIjpcImlzVXNlckluZm9TaG93XCJ9fTtcclxuJGV2ZW50cyA9IHtcImdldHVzZXJpbmZvXCI6e1widi1vbjpjcmVhdGVDb25uZWN0XCI6XCJ1c2VySW5mb0NyZWF0ZUNvbm5lY3RcIixcInYtb246ZW50ZXJcIjpcInVzZXJJbmZvRW50ZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGdldHVzZXJpbmZvOiBHZXRVc2VySW5mb1xuICAgIH1cbiAgICAvLyDkuIrkvKDlm77niYfliLDlj4jmi43kupFcbiAgICB1cGxvYWRQaWN0dXJlIChwaWN0dXJlLCBwaWN0dXJlSW5mbykge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5LiK5Lyg5LitLi4uJyxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSlcbiAgICAgIC8vIOmakOiXj+W6lemDqOaJqeWxleWKn+iDvemdouadv1xuICAgICAgdGhpcy5leHRlbmRJc1Nob3cgPSBudWxsXG4gICAgICB0aGlzLmV4dGVuZFBhbmVsSGVpZ2h0ID0gMFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgbGV0IHBhdGggPSAnL2NoYXQtaW1hZ2VzJ1xuICAgICAgLy8g5pe26Ze05qC85byP6Lev5b6EXG4gICAgICBsZXQgdGltZVBhdGggPSB0aGlzLmhhbmRsZURhdGUoJ3BhdGgnKVxuICAgICAgdXB5dW4udXBsb2FkKHtcbiAgICAgICAgbG9jYWxQYXRoOiBwaWN0dXJlLFxuICAgICAgICByZW1vdGVQYXRoOiBgJHtwYXRofS8ke3RpbWVQYXRofWAsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXG4gICAgICAgICAgbGV0IHVybCA9IGRhdGEudXJsXG4gICAgICAgICAgbGV0IHR5cGUgPSAncGljdHVyZSdcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuY3JlYXRlVXNlck1lc3NhZ2UodXJsLCB0aGlzLnVzZXJJbmZvLCB0eXBlLCBwaWN0dXJlSW5mbylcbiAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCduZXcgbWVzc2FnZScsIG1lc3NhZ2UpXG4gICAgICAgICAgdGhpcy5wdXNoTWVzc2FnZShtZXNzYWdlKVxuXG4gICAgICAgICAgVElQUy50b2FzdCh7XG4gICAgICAgICAgICBpY29uOiAnU1VDQ0VTUycsXG4gICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnydcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoe2Vyck1zZ30pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJNc2cpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIOeUn+aIkOS4gOadoeiBiuWkqeWupOeahOa2iOaBr+eahOWUr+S4gCBJRFxuICAgIG1zZ1V1aWQgKCkge1xuICAgICAgaWYgKCF0aGlzLm1zZ1V1aWQubmV4dCkge1xuICAgICAgICB0aGlzLm1zZ1V1aWQubmV4dCA9IDBcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgICAgcmV0dXJuICdtc2ctJyArICsrdGhpcy5tc2dVdWlkLm5leHRcbiAgICB9XG4gICAgLy8g55Sf5oiQ6IGK5aSp5a6k55qE57O757uf5raI5oGvXG4gICAgY3JlYXRlU3lzdGVtTWVzc2FnZSAoY29udGVudCkge1xuICAgICAgcmV0dXJuIHsgaWQ6IHRoaXMubXNnVXVpZCgpLCB0eXBlOiAnc3lzdGVtJywgY29udGVudCB9XG4gICAgfVxuICAgIC8vIOeUn+aIkOiBiuWkqeWupOeahOiBiuWkqea2iOaBr1xuICAgIGNyZWF0ZVVzZXJNZXNzYWdlIChjb250ZW50LCB1c2VyLCB0eXBlLCBwaWN0dXJlSW5mbywgaXNNZSkge1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMuaGFuZGxlRGF0ZSgndGltZScpXG4gICAgICBjb25zdCBpZCA9IHRoaXMubXNnVXVpZCgpXG4gICAgICBjb25zb2xlLmxvZyh7IGlkOiBpZCwgdHlwZTogdHlwZSA/IHR5cGUgOiAnc3BlYWsnLCBjb250ZW50LCB1c2VyLCBpc01lLCB0aW1lLCBwaWN0dXJlSW5mbyB9KVxuICAgICAgcmV0dXJuIHsgaWQ6IGlkLCB0eXBlOiB0eXBlID8gdHlwZSA6ICdzcGVhaycsIGNvbnRlbnQsIHVzZXIsIGlzTWUsIHRpbWUsIHBpY3R1cmVJbmZvIH1cbiAgICB9XG4gICAgLy8g5ZCv5Yqo6IGK5aSp5a6kXG4gICAgZW50ZXIgKCkge1xuICAgICAgdGhpcy5wdXNoTWVzc2FnZSh0aGlzLmNyZWF0ZVN5c3RlbU1lc3NhZ2UoJ+ato+WcqOeZu+W9lS4uLicpKVxuICAgICAgLy8g5aaC5p6c55m75b2V6L+H77yM5Lya6K6w5b2V5b2T5YmN55So5oi35ZyoIHRoaXMubWUg5LiKXG4gICAgICBpZiAoIXRoaXMudXNlckluZm8pIHtcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMudXNlckluZm9cbiAgICAgICAgICAgIGRhdGEub3BlbmlkID0gdGhpcy5vcGVuaWRcbiAgICAgICAgICAgIHdlcHkuJHN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnVVNFUklORk8nLCBwYXlsb2FkOiBkYXRhfSlcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WQr+WKqOiBiuWkqeWupDonLCBkYXRhKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb25uZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1VzZXJJbmZvU2hvdyA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZTo6OicsIHRoaXMubWUpXG4gICAgICAgIHRoaXMuY3JlYXRlQ29ubmVjdCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YCa55So5pu05paw5b2T5YmN5raI5oGv6ZuG5ZCI55qE5pa55rOVXG4gICAgdXBkYXRlTWVzc2FnZXMgKHVwZGF0ZXIpIHtcbiAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuZGF0YS5tZXNzYWdlc1xuICAgICAgdXBkYXRlcihtZXNzYWdlcylcbiAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgLy8g6ZyA6KaB5YWI5pu05pawIG1lc3NhZ2VzcyDmlbDmja7lkI7lho3orr7nva7mu5rliqjkvY3nva7vvIzlkKbliJnkuI3og73nlJ/mlYhcbiAgICAgIHRoaXMubGFzdE1lc3NhZ2VJZCA9IG1lc3NhZ2VzLmxlbmd0aFxuICAgICAgICA/IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdLmlkXG4gICAgICAgIDogJ25vbmUnXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgLy8g6L+95Yqg5LiA5p2h5raI5oGvXG4gICAgcHVzaE1lc3NhZ2UgKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlTWVzc2FnZXMobWVzc2FnZXMgPT4gbWVzc2FnZXMucHVzaChtZXNzYWdlKSlcbiAgICB9XG5cbiAgICAvLyDmm7/mjaLkuIrkuIDmnaHmtojmga9cbiAgICBhbWVuZE1lc3NhZ2UgKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlTWVzc2FnZXMobWVzc2FnZXMgPT4gbWVzc2FnZXMuc3BsaWNlKC0xLCAxLCBtZXNzYWdlKSlcbiAgICB9XG5cbiAgICAvLyDliKDpmaTkuIrkuIDmnaHmtojmga9cbiAgICBwb3BNZXNzYWdlICgpIHtcbiAgICAgIHRoaXMudXBkYXRlTWVzc2FnZXMobWVzc2FnZXMgPT4gbWVzc2FnZXMucG9wKCkpXG4gICAgfVxuICAgIC8vIOebkeWQrCBpbnB1dCDovpPlhaXlhoXlrrlcbiAgICBjaGFuZ2VJbnB1dENvbnRlbnQgKGUpIHtcbiAgICAgIHRoaXMuaW5wdXRDb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgLy8g5Yib5bu66L+e5o6lXG4gICAgY3JlYXRlQ29ubmVjdCAoZSkge1xuICAgICAgdGhpcy5hbWVuZE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKCfmraPlnKjliqDlhaXnvqTogYouLi4nKSlcblxuICAgICAgY29uc3Qgc29ja2V0ID0gKHRoaXMuc29ja2V0ID0gaW8oYCR7QVBJLmhvc3RuYW1lfT90eXBlPWNoYXQmcm9vbUlkPSR7dGhpcy5yb29tSWR9YCkpXG5cbiAgICAgIC8vIOi/nuaOpeaIkOWKn1xuICAgICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvcE1lc3NhZ2UoKVxuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZSgn6L+e5o6l5oiQ5YqfJykpXG4gICAgICB9KVxuICAgICAgLy8g6L+e5o6l6ZSZ6K+vXG4gICAgICBzb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBkID0+IHtcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZSh0aGlzLmNyZWF0ZVN5c3RlbU1lc3NhZ2UoYGNvbm5lY3RfZXJyb3I6ICR7ZH1gKSlcbiAgICAgIH0pXG4gICAgICAvLyDov57mjqXotoXml7ZcbiAgICAgIHNvY2tldC5vbignY29ubmVjdF90aW1lb3V0JywgZCA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKGBjb25uZWN0X3RpbWVvdXQ6ICR7ZH1gKSlcbiAgICAgIH0pXG4gICAgICAvLyDov57mjqXmlq3lvIBcbiAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIHJlYXNvbiA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKGBkaXNjb25uZWN0OiAke3JlYXNvbn1gKSlcbiAgICAgIH0pXG4gICAgICAvLyDph43mlrDov57mjqVcbiAgICAgIHNvY2tldC5vbigncmVjb25uZWN0JywgYXR0ZW1wdE51bWJlciA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKGByZWNvbm5lY3Qgc3VjY2VzczogJHthdHRlbXB0TnVtYmVyfWApXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIHNvY2tldC5vbigncmVjb25uZWN0X2ZhaWxlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZSh0aGlzLmNyZWF0ZVN5c3RlbU1lc3NhZ2UoJ3JlY29ubmVjdF9mYWlsZWQnKSlcbiAgICAgIH0pXG4gICAgICAvLyDmlq3lvIDph43ov55cbiAgICAgIHNvY2tldC5vbigncmVjb25uZWN0X2F0dGVtcHQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKCfmraPlnKjlsJ3or5Xph43ov54nKSlcbiAgICAgIH0pXG4gICAgICAvLyDplJnor69cbiAgICAgIHNvY2tldC5vbignZXJyb3InLCBlcnIgPT4ge1xuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShgZXJyb3I6ICR7ZXJyfWApKVxuICAgICAgfSlcbiAgICAgIC8vIOebkeWQrOiBiuWkqeWupOa2iOaBr1xuICAgICAgc29ja2V0Lm9uKCdsb2dpbicsIGQgPT4ge1xuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKFxuICAgICAgICAgIHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShg5oKo5bey5Yqg5YWl6IGK5aSp5a6k77yM5b2T5YmN5YWx5pyJICR7ZC5udW1Vc2Vyc30g5Lq6YClcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIC8vIOaOpeaUtuWIsOaWsOeahOiBiuWkqea2iOaBr1xuICAgICAgc29ja2V0Lm9uKCduZXcgbWVzc2FnZScsIGQgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZXIsIG1lc3NhZ2UgfSA9IGRcbiAgICAgICAgY29uc29sZS5sb2coJ+aOpeaUtuWIsOaWsOa2iOaBr++8micsIG1lc3NhZ2UpXG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UobWVzc2FnZSlcbiAgICAgIH0pXG4gICAgICAvLyDnlKjmiLfov5vlhaVcbiAgICAgIHNvY2tldC5vbigndXNlciBqb2luZWQnLCBkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+adpeS6hu+8micsIGQpXG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKGAke2QudXNlci5uaWNrTmFtZX0g5p2l5LqG77yM5b2T5YmN5YWx5pyJICR7ZC5udW1Vc2Vyc30g5Lq6YClcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIC8vIOeUqOaIt+emu+W8gFxuICAgICAgc29ja2V0Lm9uKCd1c2VyIGxlZnQnLCBkID0+IHtcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZShcbiAgICAgICAgICB0aGlzLmNyZWF0ZVN5c3RlbU1lc3NhZ2UoYCR7ZC51c2VyLm5pY2tOYW1lfSDnprvlvIDkuobvvIzlvZPliY3lhbHmnIkgJHtkLm51bVVzZXJzfSDkurpgKVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICBzb2NrZXQub24oJ3R5cGluZycsIGQgPT4ge30pXG5cbiAgICAgIHNvY2tldC5vbignc3RvcCB0eXBpbmcnLCBkID0+IHt9KVxuICAgICAgc29ja2V0LmVtaXQoJ2FkZCB1c2VyJywgdGhpcy51c2VySW5mbylcbiAgICB9XG4gICAgLy8g6ZqQ6JeP5omp5bGV6Z2i5p2/XG4gICAgaGlkZGVuRXh0ZW5kUGFuZWwgKCkge1xuICAgICAgdGhpcy5leHRlbmRJc1Nob3cgPSBudWxsXG4gICAgICB0aGlzLmV4dGVuZFBhbmVsSGVpZ2h0ID0gMFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICAvLyDovazlj5HluKblj4LmlbDvvIjliKTmlq3mmK/lkKbmmK/ovazlj5HmnaXmupDvvIlcbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IGAke3RoaXMudXNlckluZm8ubmlja05hbWV9IOmCgOivt+S9oOWKoOWFpeiBiuWkqeWupGAsXG4gICAgICAgIHBhdGg6IGAvcGFnZXMvY2hhdC9pbmRleD9yb29tSWQ9JHt0aGlzLnJvb21JZH1gLFxuICAgICAgICBpbWFnZVVybDogJy4vaW1hZ2VzL2NoYXRfc2hhcmUucG5nJ1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDogYrlpKnmlofmnKzmi4bliIbvvIjlsIblrZfnrKbkuLLmi4bliIbmiJDmlbDnu4TvvIlcbiAgICBzdHJTcGxpdCAoc3RyKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gJydcbiAgICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoLyhcXFtbXlxcW1xcXV0qXFxdKS9nKVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGlzRmFjZSA9IGFycltpXS5tYXRjaCgvXFxbW15cXFtcXF1dKlxcXS9nKVxuICAgICAgICBpZiAoaXNGYWNlKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGA8aW1nIGNsYXNzPVwiZW1vamlcIiBzcmM9XCJodHRwczovL2ltZy5taWdvbmcub3JnL2NoYXQvZmFjZXMvJHt0aGlzLmZhY2VzS2V5W2lzRmFjZVswXV19LnBuZ1wiPmBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYDxzcGFuPiR7YXJyW2ldfTwvc3Bhbj5gXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0OicsIHJlc3VsdClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLy8g5aSE55CG5pe26Ze05qC85byPXG4gICAgaGFuZGxlRGF0ZSAodHlwZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICBsZXQgbSA9IGRhdGUuZ2V0TW9udGgoKSsxXG4gICAgICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgICBsZXQgaGggPSBkYXRlLmdldEhvdXJzKClcbiAgICAgIGxldCBtbSA9IGRhdGUuZ2V0TWludXRlcygpXG4gICAgICBsZXQgc3MgPSBkYXRlLmdldFNlY29uZHMoKVxuICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICBpZiAodHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAgIC8vIOiBiuWkqeWxleekuuaXpeacn1xuICAgICAgICByZXN1bHQgPSBgJHt5fS8ke219LyR7ZH0gJHtoaH06JHttbX06JHtzc31gXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwYXRoJykge1xuICAgICAgICAvLyDlj4jmi43kupHvvIjlm77niYflrZjlgqjot6/lvoTvvIlcbiAgICAgICAgbGV0IHRpbWUgPSBkYXRlLmdldFRpbWUoKVxuICAgICAgICByZXN1bHQgPSBgJHt5fS8ke219LyR7ZH0vJHt0aW1lfWBcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLy8g5ZyoIFBhZ2Ug5ZKMIENvbXBvbmVudCDlhbHnlKjnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvcHRpb25zOicsIG9wdGlvbnMpXG4gICAgICBpZiAob3B0aW9ucy5yb29tSWQpIHtcbiAgICAgICAgdGhpcy5yb29tSWQgPSBvcHRpb25zLnJvb21JZFxuICAgICAgICB0aGlzLmdldFN0cm9hZ2VPcGVuaWQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6I635Y+W57yT5a2Y5Lit55qEIG9wZW5pZCDotYvlgLznu5kgcm9vbUlkXG4gICAgICAgIHRoaXMuZ2V0U3Ryb2FnZU9wZW5pZCgpXG4gICAgICB9XG4gICAgICAvLyDojrflj5borr7lpIfkv6Hmga9cbiAgICAgIHRoaXMuc3lzdGVtSW5mbyA9IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3lzdGVtSW5mb1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICAvLyDnm5HlkKzpobXpnaLljbjovb1cbiAgICBvblVubG9hZCAoKSB7XG4gICAgICAvLyDkuLvliqjmlq3lvIAgc29ja2V0XG4gICAgICB0aGlzLnNvY2tldC5jbG9zZSgpXG4gICAgfVxuICB9XG4iXX0=