'use strict';

const aws = require('aws-sdk');
const SQSUrl = process.env.SQS_URL;

const sqs = new aws.SQS({ apiVersion: '2012-11-05' });

module.exports.handle = async (event) => {
  try {
    const { body } = event;

    const response = await sqs.sendMessage({
      QueueUrl: SQSUrl,
      MessageBody: body
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
};
