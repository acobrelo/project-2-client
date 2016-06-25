'use strict';

const psuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

module.exports = {
  psuccess,
};
