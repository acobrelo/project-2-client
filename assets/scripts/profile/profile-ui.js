'use strict';

const ui = require('../auth/ui.js');

const psuccess = (data) => {
  $('#profile-options').hide();
  $('.to-show').show();
  ui.isProfile().done(ui.profCheck);
  console.log(data);
};

const showProfileInfo = function (profile) {
  let profileTemplate = require ('../templates/profile-template.handlebars');
  $('.ok').prepend(profileTemplate(profile));
  console.log(profile);
};

module.exports = {
  psuccess,
  showProfileInfo,
};
