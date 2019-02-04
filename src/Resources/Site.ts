import ApiResource from './ApiResource';
import Check from './Check';

export default class Site extends ApiResource {
  /**
   * site id
   * @var integer
   */
  public id: number;

  /**
   * The url of the site.
   *
   * @var string
   */
  public url: string;

  /**
   * The checks of a site.
   *
   * @var Check[]
   */
  public checks: Check[];

  /**
   * The sort url of the site.
   *
   * @var string
   */
  public sortUrl: string;

  static newInstancefromApi(data: any): Site {
    const site = super.newInstancefromApi(data) as Site;
    site.checks = site.checks.map(
      check => Check.newInstancefromApi(check) as Check
    );
    return site;
  }

  static newInstance(): Site {
    return new Site();
  }
}
