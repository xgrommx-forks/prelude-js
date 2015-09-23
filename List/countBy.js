'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

//+ countBy :: (a -> b) -> [a] -> { b: Number }

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return xs.reduce(function (acc, x) {
    var key = fn(x);
    acc[key] = acc[key] ? acc[key] + 1 : 1;
    return acc;
  }, {});
});
module.exports = exports['default'];