'use strict';

var utils = require('../utils/writer.js');
var Payments = require('../service/PaymentsService');

module.exports.getPaymentOperationByNumber = function getPaymentOperationByNumber (req, res, next) {
  var paymentNumber = req.swagger.params['paymentNumber'].value;
  Payments.getPaymentOperationByNumber(paymentNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.makePaymentPOST = function makePaymentPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Payments.makePaymentPOST(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePaymenByPayNumberPOST = function updatePaymenByPayNumberPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Payments.updatePaymenByPayNumberPOST(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePaymentByBadIdPOST = function updatePaymentByBadIdPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Payments.updatePaymentByBadIdPOST(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
