'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const profileApi = require('./profile-api');
const profileUi = require('./profile-ui');

const onProfileCreate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  profileApi.addProfile(data)
  .done(profileUi.psuccess);
};

const onShowProfile = function (event) {
  event.preventDefault();
  profileApi.seeProfile()
  .done(profileUi.showProfileInfo);
  $('#show-profile').off('click');
};

const onProfileUpdate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  profileApi.updateProfile(data);
  //.done(profileUi.psuccess);
};

const addProfileHandlers = () => {
  $('#profile-options').on('submit', onProfileCreate);
  $('#show-profile').on('click', onShowProfile);
  $('.a').on('submit', onProfileUpdate);
};

module.exports = {
  addProfileHandlers,
};
