'use strict';

module.exports.handle = async (event) => {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    body = { res: null }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
