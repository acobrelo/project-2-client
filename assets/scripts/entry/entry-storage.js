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
const getResponse = function () {
  return $.ajax({
    url: app.host + '/entries/' + num,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
      },
  }).done(responseUi.responseSetUp);
};

const resp = function (data) {
  let sss = data.entry.responses[0];
  if (sss !== undefined) {
    getResponse()
    .done(responseApi.showResponseQ);
  } else {
    $('.all-' + num).fadeIn(500).fadeOut(500);
  }
};

const hasResp = function () {
  return $.ajax({
    url: app.host + '/entries/' + num,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
      },
  }).done(resp);
};

const deleteWarning = function (event) {
  event.preventDefault();
  entryUi.id = $(this).parent().attr("class");
  num = entryUi.id;
  $('.can-' + num).show();
  $(this).hide();
};

//let click = 0;

const eventChain = function (event) {
  event.preventDefault();
  num = $(this).parent().attr("class");
  //$(this).parent().val(click);
//  if (click === 0) {
    hasResp();
//    click = 1;
//  } else {
  //  console.log(num);
//  }
//  $('.uh-' + num).show();
};

const onCancel = function (event) {
  event.preventDefault();
  $('.can-' + num).hide();
  $('.delete-warn').show();
};

const onUnhide = function (event) {
  event.preventDefault();
  $('.displayed-data').show();
};

const handlebarsBind = function () {
  $('.see-response').on('click', eventChain);
  $('.delete-warn').on('click', deleteWarning);
  $('.delete-entry').on('click', entryApi.deleteEntry);
  $('.cancel').on('click', onCancel);
  $('.unhide-response').on('click', onUnhide);
};

module.exports = {
  listEntries,
  handlebarsBind,
};
