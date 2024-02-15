'use strict';

var utils = require('../utils/writer.js');
var Bad = require('../service/BadService');

module.exports.badExistsGET = function badExistsGET (req, res, next) {
  var badId = req.swagger.params['badId'].value;
  Bad.badExistsGET(badId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.breakBadPOST = function breakBadPOST (req, res, next) {
  var initiator = req.swagger.params['initiator'].value;
  var body = req.swagger.params['body'].value;
  Bad.breakBadPOST(initiator,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changeHolderPUT = function changeHolderPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Bad.changeHolderPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changeOwnerPUT = function changeOwnerPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Bad.changeOwnerPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changeStatusPUT = function changeStatusPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Bad.changeStatusPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changeStatusWithDataPUT = function changeStatusWithDataPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Bad.changeStatusWithDataPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createBadPOST = function createBadPOST (req, res, next) {
  var initiator = req.swagger.params['initiator'].value;
  var body = req.swagger.params['body'].value;
  Bad.createBadPOST(initiator,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBadDELETE = function deleteBadDELETE (req, res, next) {
  var badId = req.swagger.params['badId'].value;
  var initiator = req.swagger.params['initiator'].value;
  Bad.deleteBadDELETE(badId,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endorseTransferPUT = function endorseTransferPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Bad.endorseTransferPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBadsGET = function getAllBadsGET (req, res, next) {
  var body = req.swagger.params['body'].value;
  Bad.getAllBadsGET(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBadByTerminalGET = function getBadByTerminalGET (req, res, next) {
  var terminal = req.swagger.params['terminal'].value;
  var body = req.swagger.params['body'].value;
  Bad.getBadByTerminalGET(terminal,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBadsByOwnerGET = function getBadsByOwnerGET (req, res, next) {
  var ownerName = req.swagger.params['ownerName'].value;
  var body = req.swagger.params['body'].value;
  Bad.getBadsByOwnerGET(ownerName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getfiltredBadsGET = function getfiltredBadsGET (req, res, next) {
  var body = req.swagger.params['body'].value;
  Bad.getfiltredBadsGET(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.isHolderGET = function isHolderGET (req, res, next) {
  var badId = req.swagger.params['badId'].value;
  var holder = req.swagger.params['holder'].value;
  Bad.isHolderGET(badId,holder)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.isOwnerGET = function isOwnerGET (req, res, next) {
  var badId = req.swagger.params['badId'].value;
  var owner = req.swagger.params['owner'].value;
  Bad.isOwnerGET(badId,owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readBadGET = function readBadGET (req, res, next) {
  var badId = req.swagger.params['badId'].value;
  Bad.readBadGET(badId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resubmitBadPUT = function resubmitBadPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var initiator = req.swagger.params['initiator'].value;
  Bad.resubmitBadPUT(body,initiator)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
