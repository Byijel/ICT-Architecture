const { SendMessageCommand, SQSClient } = require("@aws-sdk/client-sqs");

const client = new SQSClient({});
const queueUrl = process.env.QUEUE_URL;

async function sendMessage(obj) {
  const command = new SendMessageCommand({
    QueueUrl: queueUrl,
    MessageBody: JSON.stringify(obj)
  });

  const response = await client.send(command);
  console.log(response);
  return response;
};

module.exports = {
    sendMessage,
}
