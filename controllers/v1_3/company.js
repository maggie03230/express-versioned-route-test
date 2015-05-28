'use strict';

module.exports = function (app) {
  return {
    getCompany : function(req, res) {
      return res.send('v1_3 company');
    }
  }
};