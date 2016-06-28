'use strict';

//const responseStorage = require('./response-storage.js');

const rsuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const showResponseSet = function (responses) {
  let responseTemplate = require ('../templates/response.handlebars');
  $('.view-data').prepend(responseTemplate(responses));
  console.log(responses);
};

//const totalScore = function () {
  //responseStorage.tallyResponse()
  //.done()
//};

//data.entry.

module.exports = {
  rsuccess,
  showResponseSet,
};
