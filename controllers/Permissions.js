'use strict';

var utils = require('../utils/writer.js');
var Permissions = require('../service/PermissionsService');

module.exports.addPermissionsPOST = function addPermissionsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Permissions.addPermissionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPermissionsGET = function getPermissionsGET (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var orgName = req.swagger.params['orgName'].value;
  Permissions.getPermissionsGET(userName,orgName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hasPermissionGET = function hasPermissionGET (req, res, next) {
  var body = req.swagger.params['body'].value;
  Permissions.hasPermissionGET(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removePermissionsDELETE = function removePermissionsDELETE (req, res, next) {
  var body = req.swagger.params['body'].value;
  Permissions.removePermissionsDELETE(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePermissionsPUT = function updatePermissionsPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Permissions.updatePermissionsPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
