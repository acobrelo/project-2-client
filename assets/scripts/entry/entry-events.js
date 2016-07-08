'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const entryApi = require('./entry-api');
const entryUi = require('./entry-ui');
const entryStorage = require('./entry-storage');
//const responseUi = require('../response/response-ui');

const onEntryCreate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  entryApi.addEntry(data)
  .done(entryUi.esuccess);
};

const onShowEntries = function (event) {
  event.preventDefault();
  $("#view-old-entries").html("Refresh Entry List");
  $(".hidden").show();
  $('#vd').show();
  $('.view-data').empty();
  entryApi.listEntries()
  .done(entryStorage.handlebarsBind);
};

const onClose = function (event) {
  event.preventDefault();
};


const addEntryHandlers = () => {
  $('#entry-start').on('submit', onEntryCreate);
  $('#view-old-entries').on('click', onShowEntries);
  $('#present').on('close', onClose);
};

module.exports = {
  addEntryHandlers
};
