import { error, get } from './functions';
import { Context, Event } from './models';

/**
 * wraps a serverless handler with common functionality
 * this could be replaced with middleware like hapi, koa, express, etc
 * @param event the event that triggered the lambda
 * @param handle the execution context
 * @param handle the handler implementation
 */
const baseHandler = async (event: Event, context: Context, handle: (event: Event, context: Context) => Promise<any>) => {
  // items the base handler may be used for:
  // - authentication
  // - exception handling
  // - composing response object, including any headers and CORS settings
  // - loading configuration
  // - parse incoming data: i.e. JSON parsing of input
  // - normalize headers: converting them to standard casing, eg AUTHENTICATION vs Authentication vs authentication

  // default response
  const response: any = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  };

  try {
    const output = await handle(event, context);
    if (output) {
      // return output as JSON
      response.body = JSON.stringify(output);
    }
    else {
      // no content
      response.statusCode = 204;
    }
  } catch (error) {
    // log error and return 500 response
    // tslint:disable-next-line:no-console
    console.error(error);
    response.statusCode = 500;
    response.body = 'Internal server error'
    return response;
  }
  return response;
};

// this is the implemented handler that the serverless.yml file uses
export const getHandler = async (event: Event, context: Context) => baseHandler(event, context, get);

// this is a test for catching errors
export const errorHandler = async (event: Event, context: Context) => baseHandler(event, context, error);
