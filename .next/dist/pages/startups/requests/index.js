'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _startup = require('../../../ethereum/startup');

var _startup2 = _interopRequireDefault(_startup);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/lam/Documents/CrossBorder/projects/splash/pages/startups/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRow',
    value: function renderRow() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          invCount: _this2.props.invCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, ' List '), _react2.default.createElement(_routes.Link, { route: '/startups/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { Button: true, floated: 'right', style: { marginBottom: 10 },
        content: 'Create Request M.Manager',
        icon: 'add circle',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Index'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Finalize '))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.renderRow())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Found ', this.props.requestCount, ' requests '));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, startup, requestCount, invCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                startup = (0, _startup2.default)(address);
                _context.next = 4;
                return startup.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return startup.methods.investorsCount().call();

              case 7:
                invCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return startup.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, invCount: invCount });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0YXJ0dXBzL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiVGFibGUiLCJMaW5rIiwiTGF5b3V0IiwiU3RhcnR1cCIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImludkNvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3ciLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsInN0YXJ0dXAiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJpbnZlc3RvcnNDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFDakI7Ozs7Ozs7Ozs7O2dDQWNRO21CQUNUOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVyxPQUFRLEFBQ2hEOytCQUFPLEFBQUM7ZUFBRCxBQUNELEFBQ0w7Y0FGTSxBQUVGLEFBQ0o7bUJBSE0sQUFHRyxBQUNUO21CQUFTLE9BQUEsQUFBSyxNQUpSLEFBSWMsQUFDcEI7b0JBQVUsT0FBQSxBQUFLLE1BTFQsQUFLZTs7c0JBTGY7d0JBQVAsQUFBTyxBQU9SO0FBUFE7QUFDTixTQURNO0FBRFQsQUFBTyxBQVNSLE9BVFE7Ozs7NkJBVUY7VUFBQSxBQUNFLFNBREYsQUFDbUMsdUJBRG5DLEFBQ0U7VUFERixBQUNVLE1BRFYsQUFDbUMsdUJBRG5DLEFBQ1U7VUFEVixBQUNlLGFBRGYsQUFDbUMsdUJBRG5DLEFBQ2U7VUFEZixBQUMyQixPQUQzQixBQUNtQyx1QkFEbkMsQUFDMkIsQUFDakM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNFLDJCQUFBLEFBQUMsOEJBQUssc0JBQW9CLEtBQUEsQUFBSyxNQUF6QixBQUErQixVQUFyQztvQkFBQTtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQyx5Q0FBTyxRQUFSLE1BQWUsU0FBZixBQUF1QixTQUFRLE9BQU8sRUFBRSxjQUF4QyxBQUFzQyxBQUFlLEFBQ3pEO2lCQURJLEFBQ0ksQUFDUjtjQUZJLEFBRUMsQUFDTDtpQkFISTtvQkFBQTtzQkFITCxBQUVFLEFBQ0EsQUFBRyxBQUtKO0FBTEk7NEJBS0osQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLDBCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZBLEFBRUEsQUFDQSxnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIQSxBQUdBLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkEsQUFJQSxBQUNBLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxBLEFBS0EsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FSQSxBQUNBLEFBQ0EsQUFNQSxBQUdBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBbkJELEFBUUMsQUFXQSxBQUFPLEFBQUssQUFFWiwrQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsY0F0QjFCLEFBQ0UsQUFxQkMsQUFHSjs7Ozs7MkcsQUFuRDZCOzs7OzttQkFDbkI7QSwwQkFBWSxNLEFBQU0sTSxBQUFsQixBQUNGO0EsMEJBQVUsdUIsQUFBQSxBQUFROzt1QkFDRyxRQUFBLEFBQVEsUUFBUixBQUFnQixtQixBQUFoQixBQUFtQzs7bUJBQXhEO0E7O3VCQUNpQixRQUFBLEFBQVEsUUFBUixBQUFnQixpQixBQUFoQixBQUFpQzs7bUJBQWxEO0E7O3lDQUNpQixBQUFRLFVBQ3hCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVMsQUFDM0Q7eUJBQU8sUUFBQSxBQUFRLFFBQVIsQUFBZ0IsU0FBaEIsQUFBeUIsT0FBaEMsQUFBTyxBQUFnQyxBQUN0QztBLEFBSHFCLEFBQ3RCLGlCQUFBLENBRHNCOzttQkFBakI7QTtpREFNQyxFQUFFLFNBQUYsU0FBWSxVQUFaLFVBQXVCLGNBQXZCLGNBQXFDLFUsQUFBckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ1osQSxBQXZEMkI7O2tCQXVEM0IsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9sYW0vRG9jdW1lbnRzL0Nyb3NzQm9yZGVyL3Byb2plY3RzL3NwbGFzaCJ9