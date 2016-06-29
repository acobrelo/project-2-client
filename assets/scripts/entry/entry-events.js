'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const entryApi = require('./entry-api');
const entryUi = require('./entry-ui');
const entryStorage = require('./entry-storage');

const onEntryCreate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  entryApi.addEntry(data)
  .done(entryUi.esuccess);
};

const onHide = function (event) {
  event.preventDefault();
  $('#data-goes-here').hide();
  $('.hidden').hide();
  $('#view-old-entries').html("View Entries");
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

const addEntryHandlers = () => {
  $('#entry-start').on('submit', onEntryCreate);
  $('#view-old-entries').on('click', onShowEntries);
  $('#hide-entries').on('click', onHide);
};

module.exports = {
  addEntryHandlers
};
