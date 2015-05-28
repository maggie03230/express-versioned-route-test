'use strict';

module.exports = function (app) {
  return {
    getUser : function(req, res) {
      return res.send('v1_1 user');
    }
  }
};