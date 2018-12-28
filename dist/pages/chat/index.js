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

var _tooltip = require('./../../components/tooltip.js');

var _tooltip2 = _interopRequireDefault(_tooltip);

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
      showTooltip: false,
      tooltipText: '返回首页或分享给好友',
      openid: null,
      isUserInfoShow: false,
      extendPanelHeight: 0,
      msgUuid: null,
      inputContent: '',
      messages: [],
      lastMessageId: 'none',
      extendIsShow: null,
      faces: [[{ name: '微笑', index: 0 }, { name: '憨笑', index: 1 }, { name: '调皮', index: 2 }, { name: '流汗', index: 3 }, { name: '真香', index: 4 }, { name: '严肃', index: 5 }, { name: '愤怒', index: 6 }, { name: '撇嘴', index: 7 }, { name: '委屈', index: 8 }, { name: '难过', index: 9 }, { name: '流泪', index: 10 }, { name: '尴尬', index: 11 }, { name: '呲牙', index: 12 }, { name: '坏笑', index: 13 }, { name: '阴险', index: 14 }, { name: '呕吐', index: 15 }, { name: '装睡', index: 16 }, { name: '发呆', index: 17 }, { name: '傲慢', index: 18 }, { name: '闭嘴', index: 19 }, { name: '偷笑', index: 20 }, { name: '可爱', index: 21 }, { name: '惊讶', index: 22 }, { name: '比心', index: 23 }, { name: '心碎', index: 24 }, { name: '喝彩', index: 25 }, { name: '鞭炮', index: 26 }, { name: '阳光', index: 27 }, { name: '啤酒', index: 28 }, { name: '心动', index: 29 }, { name: '亲亲', index: 30 }, { name: '嘴唇', index: 31 }, { name: '玫瑰', index: 32 }, { name: '凋谢', index: 33 }, { name: '秀儿', index: 34 }, { name: 'delete', index: 'delete' }]],
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
        '[心动]': 29,
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
        if (faceName === '[delete]') {
          this.inputContent = this.handleDel();
        } else {
          this.inputContent += faceName;
        }
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
          this.extendPanelHeight = 440;
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
      sendMessage: function sendMessage() {
        var msg = this.inputContent;
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
    }, _this.$repeat = {}, _this.$props = { "getuserinfo": { "xmlns:v-on": "", "v-bind:openid.sync": "openid", "v-bind:isUserInfoShow.sync": "isUserInfoShow" }, "tooltip": { "xmlns:v-bind": "", "v-bind:show.sync": "showTooltip", "v-bind:text.sync": "tooltipText" } }, _this.$events = { "getuserinfo": { "v-on:createConnect": "userInfoCreateConnect", "v-on:enter": "userInfoEnter" } }, _this.components = {
      getuserinfo: _getUserInfo2.default,
      tooltip: _tooltip2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // 监听

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(Chat, [{
    key: 'handleDel',
    value: function handleDel() {
      var result = '';
      var str = this.inputContent;
      var strArr = str.match(/\[[^\[\]]*\]/g);
      var strLen = str.length;
      // 内容中存在表情并且最后一位是表情
      if (strArr && strArr[strArr.length - 1] === str.substr(strLen - 4, strLen)) {
        result = str.substr(0, strLen - 4);
      } else {
        // 不存在表情直接删除最后一个字符
        result = str.substr(0, strLen - 1);
      }
      return result;
    }
    // 上传图片到又拍云

  }, {
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
        this.showTooltip = true;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInVweXVuIiwiYnVja2V0Iiwib3BlcmF0b3IiLCJnZXRTaWduYXR1cmVVcmwiLCJDaGF0IiwidXNlckluZm8iLCJzdGF0ZSIsInVzZXIiLCJpbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRpc2FibGVTY3JvbGwiLCJkYXRhIiwic3lzdGVtSW5mbyIsInNob3dUb29sdGlwIiwidG9vbHRpcFRleHQiLCJvcGVuaWQiLCJpc1VzZXJJbmZvU2hvdyIsImV4dGVuZFBhbmVsSGVpZ2h0IiwibXNnVXVpZCIsImlucHV0Q29udGVudCIsIm1lc3NhZ2VzIiwibGFzdE1lc3NhZ2VJZCIsImV4dGVuZElzU2hvdyIsImZhY2VzIiwibmFtZSIsImluZGV4IiwiZmFjZXNLZXkiLCJtaXhpbnMiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJjb25zb2xlIiwibG9nIiwicm9vbUlkIiwiJGFwcGx5IiwiZW50ZXIiLCJtZXRob2RzIiwidXNlckluZm9DcmVhdGVDb25uZWN0IiwiY3JlYXRlQ29ubmVjdCIsInVzZXJJbmZvRW50ZXIiLCJhZGRGYWNlIiwiZSIsImZhY2VOYW1lIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJoYW5kbGVEZWwiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBQaWN0dXJlUGF0aHMiLCJ0ZW1wRmlsZVBhdGhzIiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwicGljdHVyZUluZm8iLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciLCJ1cGxvYWRQaWN0dXJlIiwiZmFpbCIsImVycm9yIiwic2hvd0V4dGVuZFBhbmVsIiwidmFsdWUiLCJpbWFnZU9uTG9hZCIsInRhcmdldCIsImltYWdlT25Mb2FkRXJyb3IiLCJoYW5kbGVDaGF0Q29udGFpbmVyIiwiaGlkZGVuRXh0ZW5kUGFuZWwiLCJpbnB1dCIsImRldGFpbCIsImlucHV0Rm9jdXMiLCJpbnB1dEJsdXIiLCJzZW5kTWVzc2FnZSIsIm1zZyIsImNvbnRlbnQiLCJzdHJTcGxpdCIsIm1lc3NhZ2UiLCJjcmVhdGVVc2VyTWVzc2FnZSIsInNvY2tldCIsImVtaXQiLCJwdXNoTWVzc2FnZSIsInByZXZpZXdQaWN0dXJlIiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJnZXR1c2VyaW5mbyIsInRvb2x0aXAiLCJyZXN1bHQiLCJzdHIiLCJzdHJBcnIiLCJtYXRjaCIsInN0ckxlbiIsImxlbmd0aCIsInN1YnN0ciIsInBpY3R1cmUiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInBhdGgiLCJ0aW1lUGF0aCIsImhhbmRsZURhdGUiLCJ1cGxvYWQiLCJsb2NhbFBhdGgiLCJyZW1vdGVQYXRoIiwiaGlkZUxvYWRpbmciLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwidG9hc3QiLCJpY29uIiwiZXJyTXNnIiwibmV4dCIsImlkIiwiaXNNZSIsInRpbWUiLCJjcmVhdGVTeXN0ZW1NZXNzYWdlIiwiZ2V0VXNlckluZm8iLCIkc3RvcmUiLCJkaXNwYXRjaCIsInBheWxvYWQiLCJtZSIsInVwZGF0ZXIiLCJ1cGRhdGVNZXNzYWdlcyIsInB1c2giLCJzcGxpY2UiLCJwb3AiLCJhbWVuZE1lc3NhZ2UiLCJob3N0bmFtZSIsIm9uIiwicG9wTWVzc2FnZSIsImQiLCJyZWFzb24iLCJhdHRlbXB0TnVtYmVyIiwiZXJyIiwibnVtVXNlcnMiLCJuaWNrTmFtZSIsImZyb20iLCJpbWFnZVVybCIsImFyciIsInNwbGl0IiwiaSIsImlzRmFjZSIsImRhdGUiLCJEYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImhoIiwiZ2V0SG91cnMiLCJtbSIsImdldE1pbnV0ZXMiLCJzcyIsImdldFNlY29uZHMiLCJnZXRUaW1lIiwib3B0aW9ucyIsImdldFN0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ZitCLGVBQUtDLEk7a0JBQWxCckssSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IGlvIGZyb20gJ3dlYXBwLnNvY2tldC5pbydcbiAgaW1wb3J0IHsgVElQUyB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCB7ICRNZXNzYWdlIH0gZnJvbSAnd2VweS1pdmlldydcbiAgaW1wb3J0IHsgVXB5dW4sIEFQSSB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgTG9naW4gZnJvbSAnQC9taXhpbnMvbG9naW4nXG4gIGltcG9ydCBHZXRVc2VySW5mbyBmcm9tICdAL2NvbXBvbmVudHMvZ2V0VXNlckluZm8nXG4gIGltcG9ydCBUb29sdGlwIGZyb20gJ0AvY29tcG9uZW50cy90b29sdGlwJ1xuXG4gIC8vIOWPiOaLjeS6kVNES1xuICBjb25zdCB1cHl1biA9IG5ldyBVcHl1bih7XG4gICAgYnVja2V0OiAnbWlnb25nb3JnLWltZy1zZXJ2ZScsXG4gICAgb3BlcmF0b3I6ICdjaGF0JyxcbiAgICBnZXRTaWduYXR1cmVVcmw6IEFQSS51cHl1blxuICB9KVxuXG4gIEBjb25uZWN0KHtcbiAgICB1c2VySW5mbyAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS51c2VyLmluZm9cbiAgICB9XG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgLy8g5Y+q5ZyoIFBhZ2Ug5a6e5L6L5Lit5a2Y5Zyo55qE6YWN572u5pWw5o2u77yM5a+55bqU5LqO5Y6f55Sf55qEIHBhZ2UuanNvbiDmlofku7ZcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJyxcbiAgICAgIGRpc2FibGVTY3JvbGw6IHRydWVcbiAgICB9XG4gICAgLy8g6aG16Z2i5omA6ZyA5pWw5o2u5Z2H6ZyA5Zyo6L+Z6YeM5aOw5piO77yM55So5LqO5qih5p2/5pWw5o2u57uR5a6aXG4gICAgZGF0YSA9IHtcbiAgICAgIHN5c3RlbUluZm86IHt9LFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgdG9vbHRpcFRleHQ6ICfov5Tlm57pppbpobXmiJbliIbkuqvnu5nlpb3lj4snLFxuICAgICAgb3BlbmlkOiBudWxsLFxuICAgICAgaXNVc2VySW5mb1Nob3c6IGZhbHNlLFxuICAgICAgZXh0ZW5kUGFuZWxIZWlnaHQ6IDAsXG4gICAgICBtc2dVdWlkOiBudWxsLFxuICAgICAgaW5wdXRDb250ZW50OiAnJyxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIGxhc3RNZXNzYWdlSWQ6ICdub25lJyxcbiAgICAgIGV4dGVuZElzU2hvdzogbnVsbCxcbiAgICAgIGZhY2VzOiBbXG4gICAgICAgIFtcbiAgICAgICAgICB7bmFtZTogJ+W+rueskScsIGluZGV4OiAwfSxcbiAgICAgICAgICB7bmFtZTogJ+aGqOeskScsIGluZGV4OiAxfSxcbiAgICAgICAgICB7bmFtZTogJ+iwg+earicsIGluZGV4OiAyfSxcbiAgICAgICAgICB7bmFtZTogJ+a1geaxlycsIGluZGV4OiAzfSxcbiAgICAgICAgICB7bmFtZTogJ+ecn+mmmScsIGluZGV4OiA0fSxcbiAgICAgICAgICB7bmFtZTogJ+S4peiCgycsIGluZGV4OiA1fSxcbiAgICAgICAgICB7bmFtZTogJ+aEpOaAkicsIGluZGV4OiA2fSxcbiAgICAgICAgICB7bmFtZTogJ+aSh+WYtCcsIGluZGV4OiA3fSxcbiAgICAgICAgICB7bmFtZTogJ+WnlOWxiCcsIGluZGV4OiA4fSxcbiAgICAgICAgICB7bmFtZTogJ+mavui/hycsIGluZGV4OiA5fSxcbiAgICAgICAgICB7bmFtZTogJ+a1geazqicsIGluZGV4OiAxMH0sXG4gICAgICAgICAge25hbWU6ICflsLTlsKwnLCBpbmRleDogMTF9LFxuICAgICAgICAgIHtuYW1lOiAn5ZGy54mZJywgaW5kZXg6IDEyfSxcbiAgICAgICAgICB7bmFtZTogJ+Wdj+eskScsIGluZGV4OiAxM30sXG4gICAgICAgICAge25hbWU6ICfpmLTpmaknLCBpbmRleDogMTR9LFxuICAgICAgICAgIHtuYW1lOiAn5ZGV5ZCQJywgaW5kZXg6IDE1fSxcbiAgICAgICAgICB7bmFtZTogJ+ijheedoScsIGluZGV4OiAxNn0sXG4gICAgICAgICAge25hbWU6ICflj5HlkYYnLCBpbmRleDogMTd9LFxuICAgICAgICAgIHtuYW1lOiAn5YKy5oWiJywgaW5kZXg6IDE4fSxcbiAgICAgICAgICB7bmFtZTogJ+mXreWYtCcsIGluZGV4OiAxOX0sXG4gICAgICAgICAge25hbWU6ICflgbfnrJEnLCBpbmRleDogMjB9LFxuICAgICAgICAgIHtuYW1lOiAn5Y+v54ixJywgaW5kZXg6IDIxfSxcbiAgICAgICAgICB7bmFtZTogJ+aDiuiuticsIGluZGV4OiAyMn0sXG4gICAgICAgICAge25hbWU6ICfmr5Tlv4MnLCBpbmRleDogMjN9LFxuICAgICAgICAgIHtuYW1lOiAn5b+D56KOJywgaW5kZXg6IDI0fSxcbiAgICAgICAgICB7bmFtZTogJ+WWneW9qScsIGluZGV4OiAyNX0sXG4gICAgICAgICAge25hbWU6ICfpnq3ngq4nLCBpbmRleDogMjZ9LFxuICAgICAgICAgIHtuYW1lOiAn6Ziz5YWJJywgaW5kZXg6IDI3fSxcbiAgICAgICAgICB7bmFtZTogJ+WVpOmFkicsIGluZGV4OiAyOH0sXG4gICAgICAgICAge25hbWU6ICflv4PliqgnLCBpbmRleDogMjl9LFxuICAgICAgICAgIHtuYW1lOiAn5Lqy5LqyJywgaW5kZXg6IDMwfSxcbiAgICAgICAgICB7bmFtZTogJ+WYtOWUhycsIGluZGV4OiAzMX0sXG4gICAgICAgICAge25hbWU6ICfnjqvnkbAnLCBpbmRleDogMzJ9LFxuICAgICAgICAgIHtuYW1lOiAn5YeL6LCiJywgaW5kZXg6IDMzfSxcbiAgICAgICAgICB7bmFtZTogJ+engOWEvycsIGluZGV4OiAzNH0sXG4gICAgICAgICAge25hbWU6ICdkZWxldGUnLCBpbmRleDogJ2RlbGV0ZSd9XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBmYWNlc0tleToge1xuICAgICAgICAnW+W+rueskV0nOiAwLFxuICAgICAgICAnW+aGqOeskV0nOiAxLFxuICAgICAgICAnW+iwg+earl0nOiAyLFxuICAgICAgICAnW+a1geaxl10nOiAzLFxuICAgICAgICAnW+ecn+mmmV0nOiA0LFxuICAgICAgICAnW+S4peiCg10nOiA1LFxuICAgICAgICAnW+aEpOaAkl0nOiA2LFxuICAgICAgICAnW+aSh+WYtF0nOiA3LFxuICAgICAgICAnW+WnlOWxiF0nOiA4LFxuICAgICAgICAnW+mavui/h10nOiA5LFxuICAgICAgICAnW+a1geazql0nOiAxMCxcbiAgICAgICAgJ1vlsLTlsKxdJzogMTEsXG4gICAgICAgICdb5ZGy54mZXSc6IDEyLFxuICAgICAgICAnW+Wdj+eskV0nOiAxMyxcbiAgICAgICAgJ1vpmLTpmaldJzogMTQsXG4gICAgICAgICdb5ZGV5ZCQXSc6IDE1LFxuICAgICAgICAnW+ijheedoV0nOiAxNixcbiAgICAgICAgJ1vlj5HlkYZdJzogMTcsXG4gICAgICAgICdb5YKy5oWiXSc6IDE4LFxuICAgICAgICAnW+mXreWYtF0nOiAxOSxcbiAgICAgICAgJ1vlgbfnrJFdJzogMjAsXG4gICAgICAgICdb5Y+v54ixXSc6IDIxLFxuICAgICAgICAnW+aDiuiutl0nOiAyMixcbiAgICAgICAgJ1vmr5Tlv4NdJzogMjMsXG4gICAgICAgICdb5b+D56KOXSc6IDI0LFxuICAgICAgICAnW+WWneW9qV0nOiAyNSxcbiAgICAgICAgJ1vpnq3ngq5dJzogMjYsXG4gICAgICAgICdb6Ziz5YWJXSc6IDI3LFxuICAgICAgICAnW+WVpOmFkl0nOiAyOCxcbiAgICAgICAgJ1vlv4PliqhdJzogMjksXG4gICAgICAgICdb5Lqy5LqyXSc6IDMwLFxuICAgICAgICAnW+WYtOWUh10nOiAzMSxcbiAgICAgICAgJ1vnjqvnkbBdJzogMzIsXG4gICAgICAgICdb5YeL6LCiXSc6IDMzLFxuICAgICAgICAnW+engOWEv10nOiAzNFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBMb2dpbiBtaXhpbnNcbiAgICBtaXhpbnMgPSBbTG9naW5dXG4gICAgLy8g55uR5ZCsXG4gICAgd2F0Y2ggPSB7XG4gICAgICBvcGVuaWQgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgIGlmICghdGhpcy5yb29tSWQpIHtcbiAgICAgICAgICB0aGlzLnJvb21JZCA9IG5ld1ZhbHVlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHRoaXMuZW50ZXIoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW50ZXIoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOS6i+S7tuWkhOeQhuWHveaVsO+8iOmbhuS4reS/neWtmOWcqCBtZXRob2RzIOWvueixoeS4re+8iVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB1c2VySW5mb0NyZWF0ZUNvbm5lY3QgKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3QoKVxuICAgICAgfSxcbiAgICAgIHVzZXJJbmZvRW50ZXIgKCkge1xuICAgICAgICB0aGlzLmVudGVyKClcbiAgICAgIH0sXG4gICAgICAvLyDlkJHovpPlhaXmoYbkuK3mt7vliqDooajmg4XnrKblj7dcbiAgICAgIGFkZEZhY2UgKGUpIHtcbiAgICAgICAgbGV0IGZhY2VOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZVxuICAgICAgICBpZiAoZmFjZU5hbWUgPT09ICdbZGVsZXRlXScpIHtcbiAgICAgICAgICB0aGlzLmlucHV0Q29udGVudCA9IHRoaXMuaGFuZGxlRGVsKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlucHV0Q29udGVudCArPSBmYWNlTmFtZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICAvLyDku47mnKzlnLDnm7jlhozpgInmi6nlm77niYfmiJbkvb/nlKjnm7jmnLrmi43nhadcbiAgICAgIGNob29zZUltYWdlICgpIHtcbiAgICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLFxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcFBpY3R1cmVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgICB3ZXB5LmdldEltYWdlSW5mbyh7XG4gICAgICAgICAgICAgIHNyYzogdGVtcFBpY3R1cmVQYXRocyxcbiAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwaWN0dXJlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiByZXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkUGljdHVyZSh0ZW1wUGljdHVyZVBhdGhzLCBwaWN0dXJlSW5mbylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S7juacrOWcsOebuOWGjOmAieaLqeWbvueJh+aIluS9v+eUqOebuOacuuaLjeeFp++8micsIGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDmmL7npLrmiJbpmpDol4/mianlsZXlip/og71cbiAgICAgIHNob3dFeHRlbmRQYW5lbCAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZXh0ZW5kSXNTaG93ID09PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuZXh0ZW5kSXNTaG93ID0gbnVsbFxuICAgICAgICAgIHRoaXMuZXh0ZW5kUGFuZWxIZWlnaHQgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWNlJykge1xuICAgICAgICAgIHRoaXMuZXh0ZW5kSXNTaG93ID0gdmFsdWVcbiAgICAgICAgICB0aGlzLmV4dGVuZFBhbmVsSGVpZ2h0ID0gNDQwXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdtb3JlJykge1xuICAgICAgICAgIHRoaXMuZXh0ZW5kSXNTaG93ID0gdmFsdWVcbiAgICAgICAgICB0aGlzLmV4dGVuZFBhbmVsSGVpZ2h0ID0gMjEwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGltYWdlT25Mb2FkIChlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgLy8g6ZqQ6JePIGxvYWRpbmcg5Yqo55S7XG4gICAgICAgIHRoaXMubWVzc2FnZXNbaW5kZXhdLnBpY3R1cmVJbmZvLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgaW1hZ2VPbkxvYWRFcnJvciAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+WbvueJh+WKoOi9veWksei0pScsIGVycm9yKVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUNoYXRDb250YWluZXIgKCkge1xuICAgICAgICB0aGlzLmhpZGRlbkV4dGVuZFBhbmVsKClcbiAgICAgIH0sXG4gICAgICBpbnB1dCAoZSkge1xuICAgICAgICB0aGlzLmlucHV0Q29udGVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICAvLyDovpPlhaXmoYbojrflj5bnhKbngrlcbiAgICAgIGlucHV0Rm9jdXMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W54Sm54K5JylcbiAgICAgIH0sXG4gICAgICAvLyDovpPlhaXmoYblpLHljrvnhKbngrlcbiAgICAgIGlucHV0Qmx1ciAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflpLHljrvnhKbngrknKVxuICAgICAgfSxcbiAgICAgIC8vIOWPkemAgea2iOaBr1xuICAgICAgc2VuZE1lc3NhZ2UgKCkge1xuICAgICAgICBjb25zdCBtc2cgPSB0aGlzLmlucHV0Q29udGVudFxuICAgICAgICBpZiAoIW1zZykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnN0clNwbGl0KG1zZylcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuY3JlYXRlVXNlck1lc3NhZ2UoY29udGVudCwgdGhpcy51c2VySW5mbylcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbmV3IG1lc3NhZ2UnLCBtZXNzYWdlKVxuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgIC8vIOa4heepuui+k+WFpeahhlxuICAgICAgICB0aGlzLmlucHV0Q29udGVudCA9ICcnXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICAvLyDpooTop4jlm77niYdcbiAgICAgIHByZXZpZXdQaWN0dXJlIChpbmRleCkge1xuICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vaW1nLm1pZ29uZy5vcmcke3RoaXMubWVzc2FnZXNbaW5kZXhdLmNvbnRlbnR9YFxuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDogdXJsLFxuICAgICAgICAgIHVybHM6IFt1cmxdXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOWjsOaYjumhtemdouS4reWwhuimgeS9v+eUqOWIsOeahOe7hOS7tu+8jOaIluWjsOaYjue7hOS7tuS4reaJgOW8leeUqOeahOWtkOe7hOS7tlxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnZXR1c2VyaW5mb1wiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOm9wZW5pZC5zeW5jXCI6XCJvcGVuaWRcIixcInYtYmluZDppc1VzZXJJbmZvU2hvdy5zeW5jXCI6XCJpc1VzZXJJbmZvU2hvd1wifSxcInRvb2x0aXBcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnNob3cuc3luY1wiOlwic2hvd1Rvb2x0aXBcIixcInYtYmluZDp0ZXh0LnN5bmNcIjpcInRvb2x0aXBUZXh0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImdldHVzZXJpbmZvXCI6e1widi1vbjpjcmVhdGVDb25uZWN0XCI6XCJ1c2VySW5mb0NyZWF0ZUNvbm5lY3RcIixcInYtb246ZW50ZXJcIjpcInVzZXJJbmZvRW50ZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGdldHVzZXJpbmZvOiBHZXRVc2VySW5mbyxcbiAgICAgIHRvb2x0aXA6IFRvb2x0aXBcbiAgICB9XG4gICAgaGFuZGxlRGVsICgpIHtcbiAgICAgIGxldCByZXN1bHQgPSAnJ1xuICAgICAgbGV0IHN0ciA9IHRoaXMuaW5wdXRDb250ZW50XG4gICAgICBsZXQgc3RyQXJyID0gc3RyLm1hdGNoKC9cXFtbXlxcW1xcXV0qXFxdL2cpXG4gICAgICBsZXQgc3RyTGVuID0gc3RyLmxlbmd0aFxuICAgICAgLy8g5YaF5a655Lit5a2Y5Zyo6KGo5oOF5bm25LiU5pyA5ZCO5LiA5L2N5piv6KGo5oOFXG4gICAgICBpZiAoc3RyQXJyICYmIHN0ckFycltzdHJBcnIubGVuZ3RoLTFdID09PSBzdHIuc3Vic3RyKHN0ckxlbiAtIDQsIHN0ckxlbikpIHtcbiAgICAgICAgcmVzdWx0ID0gc3RyLnN1YnN0cigwLCBzdHJMZW4gLSA0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5LiN5a2Y5Zyo6KGo5oOF55u05o6l5Yig6Zmk5pyA5ZCO5LiA5Liq5a2X56ymXG4gICAgICAgIHJlc3VsdCA9IHN0ci5zdWJzdHIoMCwgc3RyTGVuIC0gMSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLy8g5LiK5Lyg5Zu+54mH5Yiw5Y+I5ouN5LqRXG4gICAgdXBsb2FkUGljdHVyZSAocGljdHVyZSwgcGljdHVyZUluZm8pIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+S4iuS8oOS4rS4uLicsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pXG4gICAgICAvLyDpmpDol4/lupXpg6jmianlsZXlip/og73pnaLmnb9cbiAgICAgIHRoaXMuZXh0ZW5kSXNTaG93ID0gbnVsbFxuICAgICAgdGhpcy5leHRlbmRQYW5lbEhlaWdodCA9IDBcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIGxldCBwYXRoID0gJy9jaGF0LWltYWdlcydcbiAgICAgIC8vIOaXtumXtOagvOW8j+i3r+W+hFxuICAgICAgbGV0IHRpbWVQYXRoID0gdGhpcy5oYW5kbGVEYXRlKCdwYXRoJylcbiAgICAgIHVweXVuLnVwbG9hZCh7XG4gICAgICAgIGxvY2FsUGF0aDogcGljdHVyZSxcbiAgICAgICAgcmVtb3RlUGF0aDogYCR7cGF0aH0vJHt0aW1lUGF0aH1gLFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxuICAgICAgICAgIGxldCB1cmwgPSBkYXRhLnVybFxuICAgICAgICAgIGxldCB0eXBlID0gJ3BpY3R1cmUnXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZVVzZXJNZXNzYWdlKHVybCwgdGhpcy51c2VySW5mbywgdHlwZSwgcGljdHVyZUluZm8pXG4gICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbmV3IG1lc3NhZ2UnLCBtZXNzYWdlKVxuICAgICAgICAgIHRoaXMucHVzaE1lc3NhZ2UobWVzc2FnZSlcblxuICAgICAgICAgIFRJUFMudG9hc3Qoe1xuICAgICAgICAgICAgaWNvbjogJ1NVQ0NFU1MnLFxuICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKHtlcnJNc2d9KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyTXNnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICAvLyDnlJ/miJDkuIDmnaHogYrlpKnlrqTnmoTmtojmga/nmoTllK/kuIAgSURcbiAgICBtc2dVdWlkICgpIHtcbiAgICAgIGlmICghdGhpcy5tc2dVdWlkLm5leHQpIHtcbiAgICAgICAgdGhpcy5tc2dVdWlkLm5leHQgPSAwXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICAgIHJldHVybiAnbXNnLScgKyArK3RoaXMubXNnVXVpZC5uZXh0XG4gICAgfVxuICAgIC8vIOeUn+aIkOiBiuWkqeWupOeahOezu+e7n+a2iOaBr1xuICAgIGNyZWF0ZVN5c3RlbU1lc3NhZ2UgKGNvbnRlbnQpIHtcbiAgICAgIHJldHVybiB7IGlkOiB0aGlzLm1zZ1V1aWQoKSwgdHlwZTogJ3N5c3RlbScsIGNvbnRlbnQgfVxuICAgIH1cbiAgICAvLyDnlJ/miJDogYrlpKnlrqTnmoTogYrlpKnmtojmga9cbiAgICBjcmVhdGVVc2VyTWVzc2FnZSAoY29udGVudCwgdXNlciwgdHlwZSwgcGljdHVyZUluZm8sIGlzTWUpIHtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLmhhbmRsZURhdGUoJ3RpbWUnKVxuICAgICAgY29uc3QgaWQgPSB0aGlzLm1zZ1V1aWQoKVxuICAgICAgY29uc29sZS5sb2coeyBpZDogaWQsIHR5cGU6IHR5cGUgPyB0eXBlIDogJ3NwZWFrJywgY29udGVudCwgdXNlciwgaXNNZSwgdGltZSwgcGljdHVyZUluZm8gfSlcbiAgICAgIHJldHVybiB7IGlkOiBpZCwgdHlwZTogdHlwZSA/IHR5cGUgOiAnc3BlYWsnLCBjb250ZW50LCB1c2VyLCBpc01lLCB0aW1lLCBwaWN0dXJlSW5mbyB9XG4gICAgfVxuICAgIC8vIOWQr+WKqOiBiuWkqeWupFxuICAgIGVudGVyICgpIHtcbiAgICAgIHRoaXMucHVzaE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKCfmraPlnKjnmbvlvZUuLi4nKSlcbiAgICAgIC8vIOWmguaenOeZu+W9lei/h++8jOS8muiusOW9leW9k+WJjeeUqOaIt+WcqCB0aGlzLm1lIOS4ilxuICAgICAgaWYgKCF0aGlzLnVzZXJJbmZvKSB7XG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICBkYXRhLm9wZW5pZCA9IHRoaXMub3BlbmlkXG4gICAgICAgICAgICB3ZXB5LiRzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1VTRVJJTkZPJywgcGF5bG9hZDogZGF0YX0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflkK/liqjogYrlpKnlrqQ6JywgZGF0YSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29ubmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNVc2VySW5mb1Nob3cgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbWU6OjonLCB0aGlzLm1lKVxuICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3QoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmAmueUqOabtOaWsOW9k+WJjea2iOaBr+mbhuWQiOeahOaWueazlVxuICAgIHVwZGF0ZU1lc3NhZ2VzICh1cGRhdGVyKSB7XG4gICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLmRhdGEubWVzc2FnZXNcbiAgICAgIHVwZGF0ZXIobWVzc2FnZXMpXG4gICAgICB0aGlzLiRhcHBseSgpXG5cbiAgICAgIC8vIOmcgOimgeWFiOabtOaWsCBtZXNzYWdlc3Mg5pWw5o2u5ZCO5YaN6K6+572u5rua5Yqo5L2N572u77yM5ZCm5YiZ5LiN6IO955Sf5pWIXG4gICAgICB0aGlzLmxhc3RNZXNzYWdlSWQgPSBtZXNzYWdlcy5sZW5ndGhcbiAgICAgICAgPyBtZXNzYWdlc1ttZXNzYWdlcy5sZW5ndGggLSAxXS5pZFxuICAgICAgICA6ICdub25lJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIC8vIOi/veWKoOS4gOadoea2iOaBr1xuICAgIHB1c2hNZXNzYWdlIChtZXNzYWdlKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2VzKG1lc3NhZ2VzID0+IG1lc3NhZ2VzLnB1c2gobWVzc2FnZSkpXG4gICAgfVxuXG4gICAgLy8g5pu/5o2i5LiK5LiA5p2h5raI5oGvXG4gICAgYW1lbmRNZXNzYWdlIChtZXNzYWdlKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2VzKG1lc3NhZ2VzID0+IG1lc3NhZ2VzLnNwbGljZSgtMSwgMSwgbWVzc2FnZSkpXG4gICAgfVxuXG4gICAgLy8g5Yig6Zmk5LiK5LiA5p2h5raI5oGvXG4gICAgcG9wTWVzc2FnZSAoKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2VzKG1lc3NhZ2VzID0+IG1lc3NhZ2VzLnBvcCgpKVxuICAgIH1cbiAgICAvLyDnm5HlkKwgaW5wdXQg6L6T5YWl5YaF5a65XG4gICAgY2hhbmdlSW5wdXRDb250ZW50IChlKSB7XG4gICAgICB0aGlzLmlucHV0Q29udGVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICAgIC8vIOWIm+W7uui/nuaOpVxuICAgIGNyZWF0ZUNvbm5lY3QgKGUpIHtcbiAgICAgIHRoaXMuYW1lbmRNZXNzYWdlKHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZSgn5q2j5Zyo5Yqg5YWl576k6IGKLi4uJykpXG5cbiAgICAgIGNvbnN0IHNvY2tldCA9ICh0aGlzLnNvY2tldCA9IGlvKGAke0FQSS5ob3N0bmFtZX0/dHlwZT1jaGF0JnJvb21JZD0ke3RoaXMucm9vbUlkfWApKVxuXG4gICAgICAvLyDov57mjqXmiJDlip9cbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb3BNZXNzYWdlKClcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZSh0aGlzLmNyZWF0ZVN5c3RlbU1lc3NhZ2UoJ+i/nuaOpeaIkOWKnycpKVxuICAgICAgfSlcbiAgICAgIC8vIOi/nuaOpemUmeivr1xuICAgICAgc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgZCA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKGBjb25uZWN0X2Vycm9yOiAke2R9YCkpXG4gICAgICB9KVxuICAgICAgLy8g6L+e5o6l6LaF5pe2XG4gICAgICBzb2NrZXQub24oJ2Nvbm5lY3RfdGltZW91dCcsIGQgPT4ge1xuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShgY29ubmVjdF90aW1lb3V0OiAke2R9YCkpXG4gICAgICB9KVxuICAgICAgLy8g6L+e5o6l5pat5byAXG4gICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCByZWFzb24gPT4ge1xuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShgZGlzY29ubmVjdDogJHtyZWFzb259YCkpXG4gICAgICB9KVxuICAgICAgLy8g6YeN5paw6L+e5o6lXG4gICAgICBzb2NrZXQub24oJ3JlY29ubmVjdCcsIGF0dGVtcHROdW1iZXIgPT4ge1xuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKFxuICAgICAgICAgIHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShgcmVjb25uZWN0IHN1Y2Nlc3M6ICR7YXR0ZW1wdE51bWJlcn1gKVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICBzb2NrZXQub24oJ3JlY29ubmVjdF9mYWlsZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UodGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKCdyZWNvbm5lY3RfZmFpbGVkJykpXG4gICAgICB9KVxuICAgICAgLy8g5pat5byA6YeN6L+eXG4gICAgICBzb2NrZXQub24oJ3JlY29ubmVjdF9hdHRlbXB0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZSgn5q2j5Zyo5bCd6K+V6YeN6L+eJykpXG4gICAgICB9KVxuICAgICAgLy8g6ZSZ6K+vXG4gICAgICBzb2NrZXQub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZSh0aGlzLmNyZWF0ZVN5c3RlbU1lc3NhZ2UoYGVycm9yOiAke2Vycn1gKSlcbiAgICAgIH0pXG4gICAgICAvLyDnm5HlkKzogYrlpKnlrqTmtojmga9cbiAgICAgIHNvY2tldC5vbignbG9naW4nLCBkID0+IHtcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZShcbiAgICAgICAgICB0aGlzLmNyZWF0ZVN5c3RlbU1lc3NhZ2UoYOaCqOW3suWKoOWFpeiBiuWkqeWupO+8jOW9k+WJjeWFseaciSAke2QubnVtVXNlcnN9IOS6umApXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICAvLyDmjqXmlLbliLDmlrDnmoTogYrlpKnmtojmga9cbiAgICAgIHNvY2tldC5vbignbmV3IG1lc3NhZ2UnLCBkID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VyLCBtZXNzYWdlIH0gPSBkXG4gICAgICAgIGNvbnNvbGUubG9nKCfmjqXmlLbliLDmlrDmtojmga/vvJonLCBtZXNzYWdlKVxuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICB9KVxuICAgICAgLy8g55So5oi36L+b5YWlXG4gICAgICBzb2NrZXQub24oJ3VzZXIgam9pbmVkJywgZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfmnaXkuobvvJonLCBkKVxuICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKFxuICAgICAgICAgIHRoaXMuY3JlYXRlU3lzdGVtTWVzc2FnZShgJHtkLnVzZXIubmlja05hbWV9IOadpeS6hu+8jOW9k+WJjeWFseaciSAke2QubnVtVXNlcnN9IOS6umApXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICAvLyDnlKjmiLfnprvlvIBcbiAgICAgIHNvY2tldC5vbigndXNlciBsZWZ0JywgZCA9PiB7XG4gICAgICAgIHRoaXMucHVzaE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy5jcmVhdGVTeXN0ZW1NZXNzYWdlKGAke2QudXNlci5uaWNrTmFtZX0g56a75byA5LqG77yM5b2T5YmN5YWx5pyJICR7ZC5udW1Vc2Vyc30g5Lq6YClcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgc29ja2V0Lm9uKCd0eXBpbmcnLCBkID0+IHt9KVxuXG4gICAgICBzb2NrZXQub24oJ3N0b3AgdHlwaW5nJywgZCA9PiB7fSlcbiAgICAgIHNvY2tldC5lbWl0KCdhZGQgdXNlcicsIHRoaXMudXNlckluZm8pXG4gICAgfVxuICAgIC8vIOmakOiXj+aJqeWxlemdouadv1xuICAgIGhpZGRlbkV4dGVuZFBhbmVsICgpIHtcbiAgICAgIHRoaXMuZXh0ZW5kSXNTaG93ID0gbnVsbFxuICAgICAgdGhpcy5leHRlbmRQYW5lbEhlaWdodCA9IDBcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgLy8g6L2s5Y+R5bim5Y+C5pWw77yI5Yik5pat5piv5ZCm5piv6L2s5Y+R5p2l5rqQ77yJXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiBgJHt0aGlzLnVzZXJJbmZvLm5pY2tOYW1lfSDpgoDor7fkvaDliqDlhaXogYrlpKnlrqRgLFxuICAgICAgICBwYXRoOiBgL3BhZ2VzL2NoYXQvaW5kZXg/cm9vbUlkPSR7dGhpcy5yb29tSWR9YCxcbiAgICAgICAgaW1hZ2VVcmw6ICcuL2ltYWdlcy9jaGF0X3NoYXJlLnBuZydcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g6IGK5aSp5paH5pys5ouG5YiG77yI5bCG5a2X56ym5Liy5ouG5YiG5oiQ5pWw57uE77yJXG4gICAgc3RyU3BsaXQgKHN0cikge1xuICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICBsZXQgYXJyID0gc3RyLnNwbGl0KC8oXFxbW15cXFtcXF1dKlxcXSkvZylcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpc0ZhY2UgPSBhcnJbaV0ubWF0Y2goL1xcW1teXFxbXFxdXSpcXF0vZylcbiAgICAgICAgaWYgKGlzRmFjZSkge1xuICAgICAgICAgIHJlc3VsdCArPSBgPGltZyBjbGFzcz1cImVtb2ppXCIgc3JjPVwiaHR0cHM6Ly9pbWcubWlnb25nLm9yZy9jaGF0L2ZhY2VzLyR7dGhpcy5mYWNlc0tleVtpc0ZhY2VbMF1dfS5wbmdcIj5gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGA8c3Bhbj4ke2FycltpXX08L3NwYW4+YFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdDonLCByZXN1bHQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIC8vIOWkhOeQhuaXtumXtOagvOW8j1xuICAgIGhhbmRsZURhdGUgKHR5cGUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBsZXQgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkrMVxuICAgICAgbGV0IGQgPSBkYXRlLmdldERhdGUoKVxuICAgICAgbGV0IGhoID0gZGF0ZS5nZXRIb3VycygpXG4gICAgICBsZXQgbW0gPSBkYXRlLmdldE1pbnV0ZXMoKVxuICAgICAgbGV0IHNzID0gZGF0ZS5nZXRTZWNvbmRzKClcbiAgICAgIGxldCByZXN1bHQgPSAnJ1xuICAgICAgaWYgKHR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICAvLyDogYrlpKnlsZXnpLrml6XmnJ9cbiAgICAgICAgcmVzdWx0ID0gYCR7eX0vJHttfS8ke2R9ICR7aGh9OiR7bW19OiR7c3N9YFxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncGF0aCcpIHtcbiAgICAgICAgLy8g5Y+I5ouN5LqR77yI5Zu+54mH5a2Y5YKo6Lev5b6E77yJXG4gICAgICAgIGxldCB0aW1lID0gZGF0ZS5nZXRUaW1lKClcbiAgICAgICAgcmVzdWx0ID0gYCR7eX0vJHttfS8ke2R9LyR7dGltZX1gXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIC8vIOWcqCBQYWdlIOWSjCBDb21wb25lbnQg5YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICBjb25zb2xlLmxvZygnb3B0aW9uczonLCBvcHRpb25zKVxuICAgICAgaWYgKG9wdGlvbnMucm9vbUlkKSB7XG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAgPSB0cnVlXG4gICAgICAgIHRoaXMucm9vbUlkID0gb3B0aW9ucy5yb29tSWRcbiAgICAgICAgdGhpcy5nZXRTdHJvYWdlT3BlbmlkKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOiOt+WPlue8k+WtmOS4reeahCBvcGVuaWQg6LWL5YC857uZIHJvb21JZFxuICAgICAgICB0aGlzLmdldFN0cm9hZ2VPcGVuaWQoKVxuICAgICAgfVxuICAgICAgLy8g6I635Y+W6K6+5aSH5L+h5oGvXG4gICAgICB0aGlzLnN5c3RlbUluZm8gPSB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN5c3RlbUluZm9cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgLy8g55uR5ZCs6aG16Z2i5Y246L29XG4gICAgb25VbmxvYWQgKCkge1xuICAgICAgLy8g5Li75Yqo5pat5byAIHNvY2tldFxuICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKVxuICAgIH1cbiAgfVxuIl19