'use strict';

const rsuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

let num = "unknown";

const showResponseSet = function (responses) {
  let responseTemplate = require ('../templates/response.handlebars');
  $('.' + num).prepend(responseTemplate(responses));
  console.log(responses);
};

const responseSetUp = function (data) {
  num = data.entry.id;
  console.log(data);
  console.log(num);
};
//const totalScore = function () {
  //responseStorage.tallyResponse()
  //.done()
//};

//data.entry.

module.exports = {
  rsuccess,
  showResponseSet,
  responseSetUp,
};
