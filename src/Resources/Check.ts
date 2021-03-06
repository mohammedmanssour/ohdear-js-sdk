import ApiResource from './ApiResource';

export default class Check extends ApiResource {
  /**
   * The id of the site.
   *
   * @var int
   */
  public id: number;
  /**
   * The type of the check.
   *
   * @var string
   */
  public type: string;
  /**
   * The human readable version of type.
   *
   * @var string
   */
  public label: string;
  /**
   * Is the check enabled?
   *
   * @var bool
   */
  public enabled: boolean;

  static newInstance(): Check {
    return new Check();
  }
}
