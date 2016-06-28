'use strict';

const app = require('../app.js');

const responseVals = [];
let max = (responseVals.length) - 1;

const totalScore = function (data) {
  let parameter = data.responses.entry.id;
  console.log(parameter);
  //for parameter = class from clicked entry,
  //make an array of the resp values
  //
  //sum the values, divide by length
  //show total score, and also the proper message
};

//const compare = function (data) {
  //each date, sum scores//push to array
  //then, array.length/2 a[0]-whatever,
  //comapre
  //
//}
const tallyResponse = function () {
  return $.ajax({
    url: app.host + '/responses/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(totalScore);
};

module.exports = {
  responseVals,
  max,
  tallyResponse,
  totalScore,
};
