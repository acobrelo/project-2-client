'use strict';

const app = require('../app.js');
const entryUi = require('./entry-ui.js');

const addEntry = function (data) {
  return $.ajax ({
    url: app.host + '/entries/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const listEntries = function () {
  return $.ajax({
    url: app.host + '/entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(function(entries){
    entryUi.showEntry(entries);
  });
};

const showEntry = function () {
  return $.ajax({
    url: app.host + '/entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(function(entry){
    entryUi.showEntry(entry);
  });
};

const deleteEntry = () => {
  return $.ajax({
    url: app.host + '/entries/' + entryUi.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(function () {
    $('#data-goes-here').hide();
  });
};

module.exports = {
  addEntry,
  listEntries,
  showEntry,
  deleteEntry,
};
