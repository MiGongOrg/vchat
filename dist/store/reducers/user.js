'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _user = require('./../types/user.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  info: null
};

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _user.USERINFO, function (state, action) {
  state.info = action.payload;
  return _extends({}, state);
}), defaultState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFN0YXRlIiwiaW5mbyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWU7QUFDbkJDLFFBQU07QUFEYSxDQUFyQjs7a0JBSWUsK0VBQ0RDLEtBREMsRUFDTUMsTUFETixFQUNjO0FBQ3pCRCxRQUFNRCxJQUFOLEdBQWFFLE9BQU9DLE9BQXBCO0FBQ0Esc0JBQVdGLEtBQVg7QUFDRCxDQUpZLEdBS1pGLFlBTFksQyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgeyBVU0VSSU5GTyB9IGZyb20gJy4uL3R5cGVzL3VzZXInXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgaW5mbzogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zICh7XG4gIFtVU0VSSU5GT10gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzdGF0ZS5pbmZvID0gYWN0aW9uLnBheWxvYWRcbiAgICByZXR1cm4gey4uLnN0YXRlfVxuICB9XG59LCBkZWZhdWx0U3RhdGUpIl19