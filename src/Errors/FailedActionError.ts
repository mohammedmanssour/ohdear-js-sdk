import BaseError from './BaseError';

export default class FailedActionError extends BaseError {
  constructor(message: string) {
    super(message, 400);
  }
}
