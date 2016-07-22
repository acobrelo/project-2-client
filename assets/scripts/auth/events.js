'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
//const profileApi = require('../profile/profile-api.js');
//const profileUi = require('../profile/profile-ui.js');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data);
};

const onHideCat = function () {
  event.preventDefault();
  $('#cats').hide();
  $('.show-cat').show();
  $('.hide-cat').hide();
};

const onShowCat = function () {
  event.preventDefault();
  $('#cats').show();
  $('.show-cat').hide();
  $('.hide-cat').show();
};

const onCloseResponse = function (event) {
  event.preventDefault();
  $("#present").modal('hide');
  $(".displayed-data").html("");
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('.hide-cat').on('click', onHideCat);
  $('.show-cat').on('click', onShowCat);
  $('.response-close').on('click', onCloseResponse);
};
//
module.exports = {
  addHandlers,
};
