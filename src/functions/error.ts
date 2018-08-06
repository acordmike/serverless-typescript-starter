import { Context, Event } from '../models';

export const error = async (event: Event, context: Context): Promise<string> => {
    throw Error('Application exception occured');
};
