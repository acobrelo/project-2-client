'use strict';

const app = require('../app.js');
//const profileUi = require('./profile-ui.js');

const addProfile = function (data) {
  return $.ajax ({
    url: app.host + '/profiles/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  addProfile
};
