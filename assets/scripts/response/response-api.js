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

const showResponse = function () {
  return $.ajax({
    url: app.host + '/responses/' + app.entry.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(function(entry){
    responseUi.showResponse(entry);
  });
};

module.exports = {
  addResponse,
  showResponse,
};
