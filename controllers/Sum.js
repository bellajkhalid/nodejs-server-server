'use strict';

var utils = require('../utils/writer.js');
var Bad = require('../service/SumService');


//==========================================
module.exports.createPGPOST = function createPGPOST (req, res, next) {
  console.log("Sum file:");
  
  var body = req.swagger.params['body'].value;
  Bad.createPGPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
//==========================================

