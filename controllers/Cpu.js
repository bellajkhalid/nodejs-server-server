'use strict';

var utils = require('../utils/writer.js');
var Cpu = require('../service/CpuService');

module.exports.burnCPUDELETE = function burnCPUDELETE (req, res, next) {
  var initiator = req.swagger.params['initiator'].value;
  var body = req.swagger.params['body'].value;
  Cpu.burnCPUDELETE(initiator,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCPUPOST = function createCPUPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Cpu.createCPUPOST(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reAssignCPUPUT = function reAssignCPUPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Cpu.reAssignCPUPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readCPUByTokenValueGET = function readCPUByTokenValueGET (req, res, next) {
  var tokenValue = req.swagger.params['tokenValue'].value;
  Cpu.readCPUByTokenValueGET(tokenValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readCPUGET = function readCPUGET (req, res, next) {
  var nonce = req.swagger.params['nonce'].value;
  var badId = req.swagger.params['badId'].value;
  Cpu.readCPUGET(nonce,badId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.supplementCPUPUT = function supplementCPUPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Cpu.supplementCPUPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
