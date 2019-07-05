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

var _crossborder = require('../ethereum/crossborder');

var _crossborder2 = _interopRequireDefault(_crossborder);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/lam/Documents/CrossBorder/projects/splash/pages/index.js?entry';


var CrossborderIndex = function (_Component) {
  (0, _inherits3.default)(CrossborderIndex, _Component);

  function CrossborderIndex() {
    (0, _classCallCheck3.default)(this, CrossborderIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CrossborderIndex.__proto__ || (0, _getPrototypeOf2.default)(CrossborderIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CrossborderIndex, [{
    key: 'renderStartups',
    value: function renderStartups() {
      var items = this.props.startups.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/startups/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, 'view startup ')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Startups '), _react2.default.createElement(_routes.Link, { route: '/startups/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right',
        content: 'Add your Startup',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))), this.renderStartups()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var startups;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _crossborder2.default.methods.getStartups().call();

              case 2:
                startups = _context.sent;
                return _context.abrupt('return', { startups: startups });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CrossborderIndex;
}(_react.Component);

exports.default = CrossborderIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImNyb3NzYm9yZGVyIiwiTGF5b3V0IiwiTGluayIsIkNyb3NzYm9yZGVySW5kZXgiLCJpdGVtcyIsInByb3BzIiwic3RhcnR1cHMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlclN0YXJ0dXBzIiwibWV0aG9kcyIsImdldFN0YXJ0dXBzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTTs7QUFDZCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUNmOzs7Ozs7Ozs7OztxQ0FPVSxBQUNkO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksbUJBQVcsQUFDL0M7O2tCQUFNLEFBQ0ssQUFDVDt1Q0FDQyxBQUFDLDhCQUFLLHNCQUFOLEFBQTBCO3dCQUExQjswQkFBQSxBQUNDO0FBREQ7V0FBQSxrQkFDQyxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFKRSxBQUdILEFBQ0MsQUFHRjtpQkFQRixBQUFNLEFBT0ksQUFFWDtBQVRPLEFBQ0o7QUFGSixBQUFjLEFBV2QsT0FYYzsyQ0FXUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUVHLEFBQ1I7NkJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEQSxBQUNBLEFBQ0EsOEJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLHlCQUNDLEFBQUMseUNBQU8sU0FBUixBQUFnQixBQUNmO2lCQURELEFBQ1MsQUFDUjtjQUZELEFBRU0sQUFDTDtpQkFIRDs7b0JBQUE7c0JBSkQsQUFFQSxBQUNBLEFBQ0MsQUFPQztBQVBEO2lCQU5ELEFBQ0EsQUFDQSxBQVdFLEFBQUssQUFJVDs7Ozs7Ozs7Ozs7O3VCQXBDMEIsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGMsQUFBcEIsQUFBa0M7O21CQUFwRDtBO2lEQUNDLEVBQUUsVSxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NYLEEsQUE1QytCOztrQkE0Qy9CLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbGFtL0RvY3VtZW50cy9Dcm9zc0JvcmRlci9wcm9qZWN0cy9zcGxhc2gifQ==