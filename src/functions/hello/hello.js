'use strict';

module.exports.handle = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: 'World!' }),
  };
};
