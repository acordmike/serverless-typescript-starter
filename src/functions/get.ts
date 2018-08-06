import { Context, Event } from '../models';

export const get = async (event: Event, context: Context): Promise<string> => {
    return Promise.resolve('success');
};
