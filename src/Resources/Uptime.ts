import ApiResource from './ApiResource';

export default class Uptime extends ApiResource {
  /**
   * datetime of the check
   *
   * @var string
   */
  public datetime: string;

  /**
   * percentage
   *
   * @var float
   */
  public uptimePercentage: number;

  static newInstance(): Uptime {
    return new Uptime();
  }
}
