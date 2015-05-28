'use strict';

var express = require('express');

module.exports = function (router, ctrl) {
  router.route('/users').get(ctrl.v2_1.getUser);
};