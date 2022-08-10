"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.HelloWorld = HelloWorld;
exports.MyTester = void 0;

var _react = _interopRequireDefault(require("react"));

require("./hello.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const message = 'hello world 3';

function HelloWorld() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hello_div"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Hello from npm registry!"));
}

const MyTester = children => {
  return /*#__PURE__*/_react.default.createElement("div", null, "Hi");
};

exports.MyTester = MyTester;

function Button() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      'backgroundColor': 'green'
    },
    onClick: () => console.log('hit button')
  }, /*#__PURE__*/_react.default.createElement("h1", null, "My Button"));
}