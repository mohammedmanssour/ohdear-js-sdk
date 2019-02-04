import BaseError from './BaseError';

export default class NotFoundError extends BaseError {
  constructor() {
    super('The resource you are looking for could not be found.', 404);
  }
}
