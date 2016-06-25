'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

const authEvents = require('./auth/events.js');
const profileEvents = require('./profile/profile-events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  profileEvents.addProfileHandlers();
});
