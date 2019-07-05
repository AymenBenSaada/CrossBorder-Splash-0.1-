'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _startup = require('../ethereum/startup');

var _startup2 = _interopRequireDefault(_startup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/lam/Documents/CrossBorder/projects/splash/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var startup, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              startup = (0, _startup2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return startup.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var startup, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              startup = (0, _startup2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return startup.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          invCount = _props.invCount;

      var readyToFinalize = request.approvalCount > invCount / 2;
      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, id + 1), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, request.approvalCount, '/', invCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, ' Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIlN0YXJ0dXAiLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwic3RhcnR1cCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiaW52Q291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFFZDs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0oscUZBQVksbUJBQUE7bUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ1I7QUFEUSx3QkFDRSx1QkFBUSxNQUFBLEFBQUssTUFEZixBQUNFLEFBQW1COzhCQURyQjtxQkFFVSxjQUFBLEFBQUssSUFGZixBQUVVLEFBQVM7O2lCQUEzQjtBQUZRLGtDQUFBOzhCQUFBOzZCQUdSLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxJQUExQyxBQUE4QztzQkFDOUMsU0FKUSxBQUdSLEFBQW1ELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsZUFETTs7aUJBSFE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QSxlLEFBT1osc0ZBQWEsb0JBQUE7bUJBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQ0w7QUFESyx3QkFDSyx1QkFBUSxNQUFBLEFBQUssTUFEbEIsQUFDSyxBQUFtQjsrQkFEeEI7cUJBRWEsY0FBQSxBQUFLLElBRmxCLEFBRWEsQUFBUzs7aUJBQTNCO0FBRkssbUNBQUE7K0JBQUE7NkJBR0wsQUFBUSxRQUFSLEFBQWdCLGdCQUFnQixNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0JBQy9DLFNBSkssQUFHTCxBQUFvRCxBQUNwRCxBQUFTO0FBRDJDLEFBQzFELGVBRE07O2lCQUhLO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0E7Ozs7OzZCQVNMO1VBQUEsQUFDRSxNQURGLEFBQ2UsdUJBRGYsQUFDRTtVQURGLEFBQ00sT0FETixBQUNlLHVCQURmLEFBQ007bUJBQ3VCLEtBRjdCLEFBRWtDO1VBRmxDLEFBRUUsWUFGRixBQUVFO1VBRkYsQUFFTSxpQkFGTixBQUVNO1VBRk4sQUFFZSxrQkFGZixBQUVlLEFBQ3JCOztVQUFNLGtCQUFrQixRQUFBLEFBQVEsZ0JBQWdCLFdBQWhELEFBQTJELEFBQzNEOzZCQUNHLGNBQUQsT0FBSyxVQUFVLFFBQWYsQUFBdUIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQS9ELEFBQXVFO29CQUF2RTtzQkFBQSxBQUNBO0FBREE7T0FBQSxrQkFDQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQURBLEFBQ0EsQUFBVSxBQUNWLG9CQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGlCQUZBLEFBRUEsQUFBZSxBQUNmLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FIbEMsQUFHQSxBQUFPLEFBQWtDLEFBQ3pDLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGlCQUFBLEFBQWUsZUFBZ0IsS0FKL0IsQUFJQSxBQUNBLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGlCQUNDLEFBQVEsV0FBUixBQUFtQix1QkFDcEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO29CQUExQztzQkFBQTtBQUFBO09BQUEsRUFQQSxBQUtBLEFBRUEsQUFJQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxpQkFDRSxBQUFRLFdBQVIsQUFBbUIsdUJBQ3JCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QztvQkFBekM7c0JBQUE7QUFBQTtPQUFBLEVBZEYsQUFDRSxBQVdBLEFBRUEsQUFNSDs7Ozs7QUFHSCxBLEFBNUN5Qjs7a0JBNEN6QixBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbGFtL0RvY3VtZW50cy9Dcm9zc0JvcmRlci9wcm9qZWN0cy9zcGxhc2gifQ==