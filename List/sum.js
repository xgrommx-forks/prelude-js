'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _NumAdd = require('../Num/add');

var _NumAdd2 = _interopRequireDefault(_NumAdd);

exports['default'] = function (xs) {
  return xs.reduceRight(_NumAdd2['default']);
};

module.exports = exports['default'];