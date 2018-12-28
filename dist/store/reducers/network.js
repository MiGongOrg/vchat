'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _network = require('./../types/network.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  type: null,
  connected: undefined
};

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _network.CHANGENETWORK, function (state, action) {
  state.type = action.payload.type;
  state.connected = action.payload.connected;
  return _extends({}, state);
}), defaultState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldHdvcmsuanMiXSwibmFtZXMiOlsiZGVmYXVsdFN0YXRlIiwidHlwZSIsImNvbm5lY3RlZCIsInVuZGVmaW5lZCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWU7QUFDbkJDLFFBQU0sSUFEYTtBQUVuQkMsYUFBV0M7QUFGUSxDQUFyQjs7a0JBS2UsdUZBQ0lDLEtBREosRUFDV0MsTUFEWCxFQUNtQjtBQUM5QkQsUUFBTUgsSUFBTixHQUFhSSxPQUFPQyxPQUFQLENBQWVMLElBQTVCO0FBQ0FHLFFBQU1GLFNBQU4sR0FBa0JHLE9BQU9DLE9BQVAsQ0FBZUosU0FBakM7QUFDQSxzQkFBV0UsS0FBWDtBQUNELENBTFksR0FNWkosWUFOWSxDIiwiZmlsZSI6Im5ldHdvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmltcG9ydCB7IENIQU5HRU5FVFdPUksgfSBmcm9tICcuLi90eXBlcy9uZXR3b3JrJ1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHR5cGU6IG51bGwsXG4gIGNvbm5lY3RlZDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMgKHtcbiAgW0NIQU5HRU5FVFdPUktdIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3RhdGUudHlwZSA9IGFjdGlvbi5wYXlsb2FkLnR5cGVcbiAgICBzdGF0ZS5jb25uZWN0ZWQgPSBhY3Rpb24ucGF5bG9hZC5jb25uZWN0ZWRcbiAgICByZXR1cm4gey4uLnN0YXRlfVxuICB9XG59LCBkZWZhdWx0U3RhdGUpIl19