'use strict';

const app = require('../app.js');

const searchEntry = function (data) {
  let length = data.entries.length;
  let lastEntry = data.entries[length - 1].date;
  $('.last-entry-date').html("Your last entry was on " + lastEntry);
};

const listEntries = function () {
  return $.ajax({
    url: app.host + '/entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(searchEntry);
};

module.exports = {
  listEntries,
};
