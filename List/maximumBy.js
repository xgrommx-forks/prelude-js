'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

//+ maximunBy :: (a -> b) -> [a] -> b

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return xs.reduceRight(function (max, x) {
    return fn(x) > fn(max) ? x : max;
  });
});
module.exports = exports['default'];