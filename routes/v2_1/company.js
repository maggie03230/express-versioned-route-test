'use strict';

module.exports = function (router, ctrl) {
  router.route('/companies').get(ctrl.v1_3.getCompany); //when there is no v2_1, get function from v1_3
};