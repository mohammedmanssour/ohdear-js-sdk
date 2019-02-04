import ApiResource from './ApiResource';
import Team from './Team';

export default class User extends ApiResource {
  /**
   *  @var int
   */
  public id: number;

  /**
   * @var string
   */
  public name: string;

  /**
   * @var string
   */
  public email: string;

  /**
   * @var email
   */
  public photoUrl: string;

  public teams: Team[];

  static newInstance(): User {
    return new User();
  }

  static newInstancefromApi(data: any): User {
    const user = super.newInstancefromApi(data) as User;
    user.teams = user.teams.map(team => Team.newInstancefromApi(team) as Team);
    return user;
  }
}
