'use strict';

const app = require('../app.js');
//const profileApi = require('../profile/profile-api.js');
//const profileUi = require('../profile/profile-ui.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const isProfile = function () {
    return $.ajax({
      url: app.host + '/profiles/',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

const profCheck = function (da) {
  let length = da.profiles.length;
  if (length < $('.current').val()) {
    $('#profile-options').show();
  } else {
    console.log($('.current').val());
  }
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.current').val(app.user.id);
  $('.to-show').show();
  isProfile().done(profCheck);
};

const signOutSuccess = () => {
  app.user = null;
  console.log('User signed out successfully');
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  profCheck,
  isProfile,
};
