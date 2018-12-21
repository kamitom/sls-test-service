'use strict';

module.exports.hello = async (event, context) => {
  console.log(event);
  const name1 = event.queryStringParameters && event.queryStringParameters.iname;

  let msg = 'HELLO TOM';
  if (name1 !== null) {
    msg = 'Hello ' + name1;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${msg}`,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.sls = async (event, context) => {
  console.log(event);
  const name2 = event.pathParameters && event.pathParameters.iname2;

  let msg = 'HELLO MOI2';
  if (name2 !== null) {
    msg = 'Hello ' + name2;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${msg}`,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.hola = async (event, context) => {
  console.log(event);

  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: body,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

