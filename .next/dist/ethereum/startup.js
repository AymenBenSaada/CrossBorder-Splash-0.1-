'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Startup = require('./build/Startup.json');

var _Startup2 = _interopRequireDefault(_Startup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Startup2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3N0YXJ0dXAuanMiXSwibmFtZXMiOlsid2ViMyIsIlN0YXJ0dXAiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFvQixBQUFwQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDMUI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTCxLQUFLLEFBQUwsTUFBVyxrQkFBUSxBQUFuQixBQURLLFlBQ3lCLEFBRHpCLEFBQVAsQUFFQztBQUhEIiwiZmlsZSI6InN0YXJ0dXAuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbGFtL0RvY3VtZW50cy9Dcm9zc0JvcmRlci9wcm9qZWN0cy9zcGxhc2gifQ==