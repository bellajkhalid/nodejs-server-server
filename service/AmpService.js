'use strict';


/**
 * Close an Amp
 * close an Amp
 *
 * noAmp String Id of the Amp to close
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.closeAmp = function(noAmp,initiator) {
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
 * Create a new Amp
 * Create a new Amp
 *
 * body AmpCreatePayload amp object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.createAmp = function(body,initiator) {
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
 * Update an existing amp. Indicate values of attributes to update leave the others empty
 * Update basic details of an existing amp. A new token will be generated if the details are modified.
 *
 * noAmp String Amp number
 * body AmpUpdatePayload updated amp object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.updateAmp = function(noAmp,body,initiator) {
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

