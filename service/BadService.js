'use strict';


/**
 * Check if bad with given ID exists in world state.
 * Checks if the bad with the given badId exists in the blockchain. 
 *
 * badId String ID of the bad
 * returns Message
 **/
exports.badExistsGET = function(badId) {
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
 * Transform a bad into multiple CPUs based on NumCpu.
 * Transforms a bad into multiple CPUs based on the value of NumCpu field in the bad object. 
 *
 * initiator String Inintiator of the transaction
 * body BreakBadRequestWithSignature BAD object
 * returns Message
 **/
exports.breakBadPOST = function(initiator,body) {
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
 * Update the holder field of a bad with given badId in the blockchain.
 * Updates the holder field of a bad with the given badId in the blockchain. 
 *
 * body BadChangeHolderRequestWithSignature BAD object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.changeHolderPUT = function(body,initiator) {
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
 * Update the owner AND CONSIGNEE field of a bad with given badId in the blockchain.
 * Updates both the owner and consignee fields of a bad with the given badId in the blockchain. 
 *
 * body BadChangeOwnerRequestWithSignature BAD object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.changeOwnerPUT = function(body,initiator) {
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
 * Update the Status of a bad with given badId in the blockchain.
 * Update the Status of a bad with given badId in the blockchain. 
 *
 * body BadChangeStatusRequestWithSignature BAD object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.changeStatusPUT = function(body,initiator) {
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
 * Update the bad status and other details given a badId in the blockchain.
 * Update the bad status and other details given a badId in the blockchain. 
 *
 * body BadChangeOwnerAndStatusRequestWithoutSignature BAD object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.changeStatusWithDataPUT = function(body,initiator) {
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
 * Create a new bad in the blockchain.
 * Issues a new bad to the world state with the given details. 
 *
 * initiator String Inintiator of the transaction
 * body BadWithSignature BAD object
 * returns Message
 **/
exports.createBadPOST = function(initiator,body) {
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
 * Delete a given bad from the world state.
 * Deletes the bad with the given badId from the world state on the blockchain. 
 *
 * badId String ID of the bad
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.deleteBadDELETE = function(badId,initiator) {
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
 * Update the holder AND owner field of a bad in the blockchain.
 * Updates both the holder and owner fields of a bad in the blockchain. 
 *
 * body EndorseTransferRequestWithSignature BAD object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.endorseTransferPUT = function(body,initiator) {
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
 * Return all bads found in the blockchain.
 * Retrieves a list of all bads found in blockchain. The results are pagginated with pagesize. 
 *
 * body GetallRequest Pegination details
 * returns inline_response_200
 **/
exports.getAllBadsGET = function(body) {
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
 * Return all bads found in the blockchain by Terminal.
 * Retrieves a list of all bads owned by a given terminal. 
 *
 * terminal String Pegination details
 * body DateInterval  (optional)
 * returns List
 **/
exports.getBadByTerminalGET = function(terminal,body) {
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
 * Return all bads found in the blockchain.
 * Retrieves a list of all bads owned by a given user. 
 *
 * ownerName String Pegination details
 * body DateInterval  (optional)
 * returns List
 **/
exports.getBadsByOwnerGET = function(ownerName,body) {
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
 * Return all bads found in the blockchain based on defined filters.
 * Retrieves a list of all bads found in blockchain.  
 *
 * body GetfiltredBadsRequest Pegination details
 * returns inline_response_200
 **/
exports.getfiltredBadsGET = function(body) {
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
 * Check if the user is the holder of the specified bad in the blockchain.
 * Checks if the user is the holder of the specified bad in the blockchain. 
 *
 * badId String ID of the bad
 * holder String Holder of the bad
 * returns Message
 **/
exports.isHolderGET = function(badId,holder) {
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
 * Check if the user is the owner of the specified bad in the blockchain.
 * Checks if the user is the owner of the specified bad in the blockchain. 
 *
 * badId String ID of the bad
 * owner String Owner of the bad
 * returns Message
 **/
exports.isOwnerGET = function(badId,owner) {
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
 * Read a bad stored in the blockchain with the given badId.
 * Retrieves the bad stored in the blockchain with the given badId. 
 *
 * badId String ID of the bad
 * returns bad
 **/
exports.readBadGET = function(badId) {
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
 * Update bad after customs response.
 * Updates bad fields in the blockchain. 
 *
 * body ResubmitRequestWithSignature BAD object
 * initiator String Inintiator of the transaction
 * returns Message
 **/
exports.resubmitBadPUT = function(body,initiator) {
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

