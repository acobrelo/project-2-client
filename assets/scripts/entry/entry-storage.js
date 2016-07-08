'use strict';

const app = require('../app.js');
const responseUi = require('../response/response-ui.js');
const responseApi = require('../response/response-api.js');
const entryApi = require('./entry-api');
const entryUi = require('./entry-ui');
//const entryEvents = require('./entry-events');

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

const resp = function (data) {
  let responseCheck = data.entry.responses.length;
  if (responseCheck !== 0) {
    responseUi.responseSetUp(data);
    responseApi.showResponseQ();
    $('#present').modal('show');
    //$('.r-' + num).hide();
  } else {
    $('.all-' + num).fadeIn(500).fadeOut(1000);
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

const eventChain = function (event) {
  event.preventDefault();
  num = $(this).parent().attr("class");
  $(".displayed-data").html("");
  hasResp();
};

const onCancel = function (event) {
  event.preventDefault();
  $('.can-' + num).hide();
  $('.delete-warn').show();
};

const onDelete = function (event) {
  event.preventDefault();
  entryApi.deleteEntry();
  $(this).parent().hide();
};


const handlebarsBind = function () {
  $('.see-response').on('click', eventChain);
  $('.delete-warn').on('click', deleteWarning);
  $('.delete-entry').on('click', onDelete);
  $('.cancel').on('click', onCancel);
};

module.exports = {
  listEntries,
  handlebarsBind,
};
