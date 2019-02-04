import BaseError from './BaseError';

export default class ValidationError extends BaseError {
  /**
   * validation errors
   */
  errors: ValidationErrorObject;

  constructor(errors: ValidationErrorObject) {
    super('The given data failed to pass validation.', 422);
    this.errors = errors;
  }
}

export type ValidationErrorObject = { string: string[] };
