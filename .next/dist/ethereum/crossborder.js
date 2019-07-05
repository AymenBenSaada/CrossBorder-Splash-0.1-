'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Crossborder = require('./build/Crossborder.json');

var _Crossborder2 = _interopRequireDefault(_Crossborder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Crossborder2.default.interface), '0x347D63b416476E4A7389610083358306a7eFDCCD');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2Nyb3NzYm9yZGVyLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDcm9zc2JvcmRlciIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQVEsQUFBUixBQUF5QixBQUF6Qjs7Ozs7O0FBR0EsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLHNCQUFZLEFBQXZCLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiY3Jvc3Nib3JkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbGFtL0RvY3VtZW50cy9Dcm9zc0JvcmRlci9wcm9qZWN0cy9zcGxhc2gifQ==