'use strict';

const app = require('../app.js');
const responseUi = require('../response/response-ui.js');
const responseApi = require('../response/response-api.js');
const entryApi = require('./entry-api');
const entryUi = require('./entry-ui');

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

let num;

let hasResp = "no";

const getResponse = function () {
  console.log("work?");
  return $.ajax({
    url: app.host + '/entries/' + num,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
      },
  }).done(responseUi.responseSetUp);
};

const deleteWarning = function () {
  $(this).parent().children().show();
  $(this).hide();
  entryUi.id = $(this).parent().attr("class");
};

const eventChain = function () {
  num = $(this).parent().attr("class");
  getResponse()
  .done(responseApi.showResponseQ);
};

const handlebarsBind = function () {
  $('.see-response').on('click', eventChain);
  $('.delete-warn').on('click', deleteWarning);
  $('.delete-entry').on('click', entryApi.deleteEntry);
};

module.exports = {
  listEntries,
  handlebarsBind,
};
