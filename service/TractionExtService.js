'use strict';


/**
 * Create a new certified traction operation
 * Create a new certified traction operation
 *
 * body CreationTractionExt tractionExt object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.createTractionExt = function(body,initiator) {
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
 * Find tractionExt by Id
 * Returns a single tractionExt identified by its TractionExtNum
 *
 * tractionExtNum String ID of tractionExt to return
 * returns tractionExt
 **/
exports.getTractionExtById = function(tractionExtNum) {
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

