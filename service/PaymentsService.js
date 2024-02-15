'use strict';


/**
 * Get a payment operation by its number
 * Returns the payment operation with the specified number.
 *
 * paymentNumber String The number of the payment operation to retrieve
 * returns PaymentOperation
 **/
exports.getPaymentOperationByNumber = function(paymentNumber) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Pay the due amount for a given bad.
 * Pays the due amount for the given bad in the blockchain. 
 *
 * body PaymentOperationRequestWithSignature payment object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.makePaymentPOST = function(body,initiator) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check and update the status of a payment previously done for a given bad
 * Check and update the status of a payment previously done for a given bad 
 *
 * body StatusPaymentOperationRequest payment object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.updatePaymenByPayNumberPOST = function(body,initiator) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check and update the status of a payment previously done for a given bad.
 * Check and update the status of a payment previously done for a given bad 
 *
 * body StatusPaymentOperationRequestByBadId payment object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.updatePaymentByBadIdPOST = function(body,initiator) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

