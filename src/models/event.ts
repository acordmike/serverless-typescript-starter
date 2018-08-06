/**
 * Event decouples the implemented event with the application event
 * The event may be modified or extended here
 */
import {
    APIGatewayEvent
  } from 'aws-lambda';

export { APIGatewayEvent as Event };