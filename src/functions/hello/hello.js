'use strict';

module.exports.handle = async (event) => {
  return {
    statusCode: 200,
    body: {
      today: new Date().toLocaleDateString(),
      success: true
    },
    event
  }
};
