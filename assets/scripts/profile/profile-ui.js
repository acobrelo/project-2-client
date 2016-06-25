'use strict';

const psuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
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
