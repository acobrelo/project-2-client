'use strict';

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


module.exports = {
  rsuccess,
  showResponseSet,
};
