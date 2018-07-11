import {
  APIGatewayEvent,
  Context
} from 'aws-lambda';

const handler = async (event: APIGatewayEvent, context: Context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success!!!',
      input: event,
    }),
  };

  return response
};

export { handler };
