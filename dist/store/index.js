'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('./../npm/redux/lib/index.js');

var _reduxPromise = require('./../npm/redux-promise/lib/index.js');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));

exports.default = function (configStore) {
  return Store;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLDRDQUVaLG1EQUZZLENBQWQ7O2tCQUtlO0FBQUEsU0FBZUEsS0FBZjtBQUFBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSAsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHByb21pc2VNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXByb21pc2UnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuXG5jb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlIChcbiAgcmVkdWNlcixcbiAgYXBwbHlNaWRkbGV3YXJlKHByb21pc2VNaWRkbGV3YXJlKVxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdTdG9yZSA9PiBTdG9yZSJdfQ==