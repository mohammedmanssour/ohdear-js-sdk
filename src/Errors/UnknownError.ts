import BaseError from './BaseError';

export default class UnknownError extends BaseError {
  constructor(message: string) {
    super(message, 0);
  }
}
