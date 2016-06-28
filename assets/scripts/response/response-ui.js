'use strict';

const rsuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

let num = "unknown";
let vals = [];
let qOrder = [];
let meds = "unknown";

const responseFinal = function () {
  for (let i = 0; i < 20; i++) {
    $('#' + (i + 1)).append(vals[i]);
  }
};

const showResponseSet = function (questions) {
  if (vals.length !== 0) {
  let responseTemplate = require ('../templates/response.handlebars');
  $('.' + num).prepend(responseTemplate(questions));
  $('.' + num).append("Took meds: " + meds);
  responseFinal();
  console.log(questions);
} else {
    $('.' + num).append("Took meds: " + meds);
}
};

const responseSetUp = function (data) {
  let e = data.entry;
  num = e.id;
  meds = e.meds_taken;
//  let arr = e.responses;
  for (let i = 0; i < e.responses.length; i++) {
    let a = e.responses[i].question_id;
    qOrder.push(a);
  }
  for (let i = 0; i < qOrder.length; i++) {
    let b = e.responses[i].response_value;
    let c = qOrder[i];
    vals[c - 1] = b;
  }
  console.log(vals);
  console.log(qOrder);
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
  responseFinal,
};
