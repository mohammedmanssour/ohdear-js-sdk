import ApiResource from './ApiResource';

export default class Downtime extends ApiResource {
  /**
   * datetime when the downtime started
   *
   * @var string
   */
  public startedAt: string;

  /**
   * datetime when the downtime ended
   *
   * @var float
   */
  public endedAt: number;

  static newInstance(): Downtime {
    return new Downtime();
  }
}
