'use strict';

const app = require('../app.js');

let id = "";

const esuccess = (data) => {
  app.entry = data.entry;
  id = app.entry.id;
  $('.the-date').val(app.entry.date);
  $('.entry-id').val(id);
  $('.last-entry-date').html("Your last entry was on " + app.entry.date);
  $('.last-entry-date').show();
  $('input[type=radio]').attr('checked', false);
  $('input[type=date]').val("");
  $('textarea').val("");
  $('#entry-start').hide();
};

const showEntry = function (entries) {
  let entryTemplate = require ('../templates/entry.handlebars');
  $('.view-data').prepend(entryTemplate(entries));
};

module.exports = {
  esuccess,
  showEntry,
};
