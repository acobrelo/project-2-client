'use strict';

const rsuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

//const showResponse = function (entries) {
//  let entryTemplate = require ('../templates/entry.handlebars');
//  $('.view-data').prepend(entryTemplate(response));
//  console.log(response);
//};


module.exports = {
  rsuccess,
  //showResponse,
};
