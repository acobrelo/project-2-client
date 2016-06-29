
'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const responseApi = require('./response-api');
//const responseUi = require('./response-ui');
const responseStorage = require('./response-storage');

const onResponseCreate = function (event) {
  event.preventDefault();
  if (responseStorage.responseVals.length === 20) {
    $('.responses-incomplete').hide();
    for (let i = 0; i < 20; i++) {
      $('.qid').val(i+1);
      $('.response-val').val(responseStorage.responseVals[i]);
      let data = getFormFields(event.target);
      responseApi.addResponse(data);
    }
  } else {
      $('.responses-incomplete').show();
    }
};

const onTest = function () {
  let i = parseInt($(this).attr("name"));
  let val = parseInt($(this).val());
  responseStorage.responseVals[i-1] = val;
};

const addResponseHandlers = () => {
  $('#responsedata').on('submit', onResponseCreate);
  $("#response input[type=radio]").on('click', onTest);
};

module.exports = {
  addResponseHandlers
};
