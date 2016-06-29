'use strict';

let number;
let vals = [];
let qOrder = [];
let sum = 0;


const scoreSort = function () {
  vals.map(function (val) {
    sum += val;
  });
  $('#total-score').append(sum);
  if (sum > 26) {
    $('#severity').append("Severe symptoms. Hang in there!");
  } else if ( 26 > sum && sum > 17 ) {
    $('#severity').append("Moderate");
  } else if ( 16 > sum && sum > 11 ) {
    $('#severity').append("Mild");
  } else {
    $('#severity').append("Minimal symptoms! Congrats!");
  }
};

const responseFinal = function () {
  for (let i = 0; i < 20; i++) {
    $('#' + (i + 1)).append(vals[i]);
  }
};

const showResponseSet = function (questions) {
  let responseTemplate = require ('../templates/response.handlebars');
  $('.' + number).prepend(responseTemplate(questions));
  responseFinal();
  scoreSort();
};

const responseSetUp = function (data) {
    let e = data.entry;
    number = e.id;
    for (let i = 0; i < e.responses.length; i++) {
      let a = e.responses[i].question_id;
      qOrder.push(a);
    for (let i = 0; i < qOrder.length; i++) {
      let b = e.responses[i].response_value;
      let c = qOrder[i];
      vals[c - 1] = b;
    }
  }
};

module.exports = {
  showResponseSet,
  responseSetUp,
  responseFinal,
  scoreSort
};
