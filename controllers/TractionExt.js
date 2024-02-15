'use strict';

var utils = require('../utils/writer.js');
var TractionExt = require('../service/TractionExtService');

module.exports.createTractionExt = function createTractionExt (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  TractionExt.createTractionExt(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTractionExtById = function getTractionExtById (req, res, next) {
  var tractionExtNum = req.swagger.params['TractionExtNum'].value;
  TractionExt.getTractionExtById(tractionExtNum)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
