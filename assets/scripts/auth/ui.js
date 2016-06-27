'use strict';

const app = require('../app.js');
const entryStorage = require('../entry/entry-storage.js');
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
  let id = $('.current').val();
  console.log(length + " and " + id);
  if (length < id) {
    $('#profile-options').show();
  } else {
    let name = da.profiles[id-1].name;
    $('.personal-welcome').html("Welcome, " + name);
    entryStorage.listEntries();
  }
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.current').val(app.user.id);
  $('.to-show').show();
  $('.to-hide').hide();
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
