'use strict';

const app = require('../app.js');

const searchEntry = function (data) {
  let length = data.entries.length;
  if (length !== 0) {
    let lastEntry = data.entries[length - 1].date;
    $('.last-entry-date').html("Your last entry was on " + lastEntry);
} else {
    $('.last-entry-date').hide();
  }
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

const getResponse = function () {
  console.log("work?");
  let num = $(this).parent().attr("class");
  return $.ajax({
    url: app.host + '/entries/' + num,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
      },
    }).done(function () {
      console.log("yaaasssss");
    });
};

const handlebarsBind = function () {
  $('.see-response').on('click', getResponse);
};

module.exports = {
  listEntries,
  handlebarsBind,
};
