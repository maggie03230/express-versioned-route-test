'use strict';

module.exports = function (app, ctrl) {
  app.get('/companies', ctrl.v1_1.getCompany);
};