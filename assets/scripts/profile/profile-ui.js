'use strict';

const psuccess = (data) => {
  $('#profile-options').hide();
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
