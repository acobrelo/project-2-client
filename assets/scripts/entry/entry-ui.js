'use strict';

const esuccess = (data) => {
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
