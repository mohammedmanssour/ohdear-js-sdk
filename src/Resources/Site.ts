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

  /*----------------------------------------------------
  * Api Related methods
  --------------------------------------------------- */

  /**
   * TODO::
   * Delete the given site.
   *
   * @return void
   */
  public delete() {}

  /**
   * TODO::
   * Get the broken links for this site.
   *
   * @return array
   */
  public brokenLinks() {}

  /**
   * TODO::
   * Get the detected mixed content for a site.
   *
   * @return array
   */
  public mixedContent() {}

  /**
   * TODO::
   * Get the uptime percentages for a site.
   *
   * @param string startedAt  Must be in format Ymdhis
   * @param string endedAt  Must be in format Ymdhis
   * @param string split  Use hour, day or month
   *
   * @return array
   */
  public uptime(startedAt: string, endedAt: string, split: string) {}

  /**
   * TODO::
   * Get the downtime periods for a site.
   *
   * @param string startedAt  Must be in format Ymdhis
   * @param string endedAt  Must be in format Ymdhis
   *
   * @return array
   */
  public downtime(startedAt: string, endedAt: string) {}

  /**
   * TODO::
   * Get information on the certificate of the site.
   *
   * @return array
   */
  public certificateHealth() {}
}
