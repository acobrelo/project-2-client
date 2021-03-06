'use strict';

const app = require('../app.js');

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

const seeProfile = function () {
  return $.ajax({
    url: app.host + '/profiles/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateProfile = (data) => {
  return $.ajax({
    url: app.host + '/profiles/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  addProfile,
  seeProfile,
  updateProfile,
};
