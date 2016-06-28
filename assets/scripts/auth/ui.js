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
  let user_id = $('.current').val();
  console.log(length + " and " + user_id);
  if (length < user_id) {
    $('#profile-options').show();
  } else {
    let name = da.profiles[user_id-1].name;
    $('.personal-welcome').html("Welcome, " + name);
    $('.to-show').show();
    $('.sign').show();
    entryStorage.listEntries();
  }
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.current').val(app.user.id);
  $('.to-hide').hide();
  $('.to-clear').val("");
  $('.default-show').show();
  isProfile().done(profCheck);
};

const signOutSuccess = () => {
  app.user = null;
  $('.current').val();
  $('.to-show').hide();
  $('.to-hide').show();
  $('.signout').hide();
  $('personal-welcome').html("");
  $('#profile-options').hide();
  $('input[type=radio]').attr('checked', false);
  $('input[type=date]').val("");
  $('textarea').val("");
  //$('#account-options').fadeOut('fast', success);
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
