'use strict';

const ui = require('../auth/ui.js');

const psuccess = () => {
  $('#profile-options').hide();
  $('.to-show').show();
  ui.isProfile().done(ui.profCheck);
};

const showProfileInfo = function (profile) {
  let profileTemplate = require ('../templates/profile-template.handlebars');
  $('.ok').prepend(profileTemplate(profile));
};

module.exports = {
  psuccess,
  showProfileInfo,
};
