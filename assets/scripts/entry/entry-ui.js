'use strict';

const app = require('../app.js');

const esuccess = (data) => {
  app.entry = data.entry;
  $('.the-date').val(app.entry.date);
  $('.entry-id').val(app.entry.id);
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
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
