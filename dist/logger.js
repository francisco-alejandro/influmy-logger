"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.levels = void 0;

var _winston = _interopRequireDefault(require("winston"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var levels = _winston["default"].config.npm.levels;
exports.levels = levels;

var setLevel = function setLevel(_ref) {
  var level = _ref.level;
  var possible = Object.keys(levels).find(function (key) {
    return levels[key] === level;
  });
  return possible || setLevel({
    level: levels.info
  });
};

function Logger(_ref2) {
  var level = _ref2.level;
  return _winston["default"].createLogger({
    level: setLevel({
      level: level
    }),
    levels: levels,
    transports: [new _winston["default"].transports.Console({
      format: _winston["default"].format.combine(_winston["default"].format.colorize(), _winston["default"].format.simple())
    })]
  });
}

var _default = Logger;
exports["default"] = _default;