'use strict';

var utils = require('../utils/writer.js');
var Amp = require('../service/AmpService');

module.exports.closeAmp = function closeAmp (req, res, next) {
  var noAmp = req.swagger.params['noAmp'].value;
  var initiator = req.swagger.params['initiator'].value;
  Amp.closeAmp(noAmp,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAmp = function createAmp (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Amp.createAmp(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAmp = function updateAmp (req, res, next) {
  var noAmp = req.swagger.params['noAmp'].value;
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Amp.updateAmp(noAmp,body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
