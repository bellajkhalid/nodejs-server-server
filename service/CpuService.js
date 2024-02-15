'use strict';


/**
 * Burn a specific CPU.
 * Burns a specific CPU from the world state on the blockchain. 
 *
 * initiator String Inintiator of the transaction
 * body Body Request body with multiple variables (optional)
 * returns CpuResponse
 **/
exports.burnCPUDELETE = function(initiator,body) {
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
 * Create a new CPU for a given BAD.
 * Creates a new CPU for a given BAD in the creation phase. The minter indicates the first owner (transporter). 
 *
 * body CpuWithSignature CPU object
 * initiator String Inintiator of the transaction
 * returns CpuResponse
 **/
exports.createCPUPOST = function(body,initiator) {
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
 * Assign a CPU to a new owner.
 * Assigns a CPU to a new owner in the blockchain. 
 *
 * body AssignCpuRequestWithSignature CPU object
 * initiator String Inintiator of the transaction
 * returns CpuResponse
 **/
exports.reAssignCPUPUT = function(body,initiator) {
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
 * Read a CPU using its token value.
 * Reads a CPU for a given CPUId. 
 *
 * tokenValue String the random token vlaue in the CPU
 * returns Cpu
 **/
exports.readCPUByTokenValueGET = function(tokenValue) {
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
 * Read a CPU for a given CPUId.
 * Reads a CPU for a given CPUId. 
 *
 * nonce String nonce of the CPU
 * badId String ID of the bad
 * returns Cpu
 **/
exports.readCPUGET = function(nonce,badId) {
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
 * Supplement a CPU to a driver and transfer ownership to the driver.
 * Supplements a CPU to a driver and transfers ownership to the driver in the blockchain with the provided details. This function is called by the owner of the CPU (transporter). 
 *
 * body SupplementCpuWithSignature CPU object
 * initiator String Inintiator of the transaction
 * returns CpuResponse
 **/
exports.supplementCPUPUT = function(body,initiator) {
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

