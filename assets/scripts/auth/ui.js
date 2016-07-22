'use strict';

const app = require('../app.js');
const entryStorage = require('../entry/entry-storage.js');
//const profileUi = require('../profile/profile-ui.js');

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
  if (length < user_id) {
    $('#profile-options').show();
  } else {
    $('.personal-welcome').html("Welcome!");
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
  $('#view-old-entries').show();
  $('#entry-start').collapse('show');
  $('.add-hide').show();
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
  $('.cue-hide').hide();
  $('.see-response').show();
  $('.unhide-response').hide();
  $('#view-data').html("");
  $('#data-goes-here').html("");
  $('#view-old-entries').html("View Entries");
  $('#dep').collapse('hide');
  $('.profileclear').html("");
};

module.exports = {
  failure,
  signInSuccess,
  signOutSuccess,
  profCheck,
  isProfile,
};
