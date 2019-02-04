import ApiResource from './ApiResource';

export default class Team extends ApiResource {
  /**
   * @var number
   */
  public id: number;
  /**
   * @var string
   */
  public name: number;

  static newInstance(): Team {
    return new Team();
  }
}
