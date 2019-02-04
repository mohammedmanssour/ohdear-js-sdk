export default class BaseError extends Error {
  /**
   * error code
   */
  code: number;

  constructor(message: string, code: number) {
    super(message);

    this.code = code;
  }
}
