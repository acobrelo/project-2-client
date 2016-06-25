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

const addProfileHandlers = () => {
  $('#profile-options').on('submit', onProfileCreate);
};

module.exports = {
  addProfileHandlers,
};
