'use strict';

const aws = require('aws-sdk');
const SQSUrl = 'https://sqs.sa-east-1.amazonaws.com/737295027616/testQueue';

const sqs = new aws.SQS({ apiVersion: '2012-11-05' });

module.exports.handle = async (event) => {
  try {

    const { Messages: messages } = await sqs.receiveMessage({
      QueueUrl: SQSUrl
    }).promise();

    return {
      statusCode: 200,
      body: messages[0].Body
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
};