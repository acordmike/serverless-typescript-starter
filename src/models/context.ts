/**
 * Context decouples the implemented context with the application context
 * The context may be modified or extended here
 */
import {
    Context as AWSContext
  } from 'aws-lambda';

export { AWSContext as Context };