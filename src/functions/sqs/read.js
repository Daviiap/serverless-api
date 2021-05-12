'use strict';

const aws = require('aws-sdk');
const SQSUrl = process.env.SQS_URL;

const sqs = new aws.SQS({ apiVersion: '2012-11-05' });

module.exports.handle = async (event) => {
  try {

    const sqsResponse = await sqs.receiveMessage({
      QueueUrl: SQSUrl
    }).promise();

    const messages = sqsResponse.Messages || [];

    for (const message of messages) {
      message.Body = JSON.parse(message.Body);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        numberOfMessages: messages.length,
        messages
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
};
