'use strict';

const app = require('../app.js');
const responseUi = require('./response-ui.js');

const addResponse = function (data) {
  return $.ajax ({
    url: app.host + '/responses/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const showResponseQ = function () {
  return $.ajax({
    url: app.host + '/questions/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(function (questions) {
    responseUi.showResponseSet(questions);
  });
};

module.exports = {
  addResponse,
  showResponseQ,
};
