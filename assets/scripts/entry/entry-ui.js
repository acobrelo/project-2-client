'use strict';

const app = require('../app.js');

const esuccess = (data) => {
  app.entry = data.entry;
  $('.the-date').val(app.entry.date);
  $('.entry-id').val(app.entry.id);
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
  console.log(entries);
};

module.exports = {
  esuccess,
  showEntry,
};
