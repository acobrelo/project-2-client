'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const entryApi = require('./entry-api');
const entryUi = require('./entry-ui');

const onEntryCreate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  entryApi.addEntry(data)
  .done(entryUi.esuccess);
};

const onShowEntries = function (event) {
  event.preventDefault();
  entryApi.listEntries();
};

const addEntryHandlers = () => {
  $('#make-entry').on('submit', onEntryCreate);
  $('#view-old-entries').on('click', onShowEntries);
};

module.exports = {
  addEntryHandlers
};
