'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = false ? 'prod' : 'dev';
var domains = {
  dev: {
    chat: 'http://127.0.0.1:4000',
    wall: 'http://localhost:8080'
  },
  prod: {
    chat: 'https://chat.migong.org',
    wall: 'https://wall.migong.org'
  }
};
var domain = exports.domain = domains[env];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImVudiIsImRvbWFpbnMiLCJkZXYiLCJjaGF0Iiwid2FsbCIsInByb2QiLCJkb21haW4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxRQUF3QyxNQUF4QyxHQUFpRCxLQUE3RDtBQUNBLElBQU1DLFVBQVU7QUFDZEMsT0FBSztBQUNIQyxVQUFNLHVCQURIO0FBRUhDLFVBQU07QUFGSCxHQURTO0FBS2RDLFFBQU07QUFDSkYsVUFBTSx5QkFERjtBQUVKQyxVQUFNO0FBRkY7QUFMUSxDQUFoQjtBQVVPLElBQU1FLDBCQUFTTCxRQUFRRCxHQUFSLENBQWYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3Byb2QnIDogJ2RldidcbmNvbnN0IGRvbWFpbnMgPSB7XG4gIGRldjoge1xuICAgIGNoYXQ6ICdodHRwOi8vMTI3LjAuMC4xOjQwMDAnLFxuICAgIHdhbGw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG4gIH0sXG4gIHByb2Q6IHtcbiAgICBjaGF0OiAnaHR0cHM6Ly9jaGF0Lm1pZ29uZy5vcmcnLFxuICAgIHdhbGw6ICdodHRwczovL3dhbGwubWlnb25nLm9yZydcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGRvbWFpbiA9IGRvbWFpbnNbZW52XSJdfQ==