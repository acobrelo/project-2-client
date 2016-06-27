'use strict';

const app = require('../app.js');

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

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user.id);
  $('.current').val(app.user.id);
};

const signOutSuccess = () => {
  app.user = null;
  console.log('User signed out successfully');
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
