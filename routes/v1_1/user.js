'use strict';

module.exports = function (router, ctrl) {
  router.route('/users').get(ctrl.v1_1.getUser);
};