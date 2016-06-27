
'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const responseApi = require('./response-api');
const responseUi = require('./response-ui');
const responseStorage = require('./response-storage');

const onResponseCreate = function (event) {
  event.preventDefault();
  for (let i = 0; i < 20; i++) {
    $('.qid').val(i+1);
    $('.response-val').val(responseStorage.responseVals[i]);
    let data = getFormFields(event.target);
    responseApi.addResponse(data)
    .done(responseUi.rsuccess);
  }
};

const onTest = function () {
  let i = parseInt($(this).attr("name"));
  let val = parseInt($(this).val());
  responseStorage.responseVals[i-1] = val;
  console.log(responseStorage.responseVals);
};


//const onShowResponse = function (event) {
//  event.preventDefault();
  //responseApi.showResponse();
//};

const addResponseHandlers = () => {
  $('#responsedata').on('submit', onResponseCreate);
  $("#response input[type=radio]").on('click', onTest);
};

module.exports = {
  addResponseHandlers
};
