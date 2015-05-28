'use strict';

module.exports = function (router, ctrl) {
  router.route('/companies').get(ctrl.v1_3.getCompany);
};