import Fetch from './Fetch';
import User from './Resources/User';
import FetchOptions from 'fetch-http-wrapper/dist/lib/FetchOptions';
import SitesOptions from './Models/SitesOptions';
import Site from './Resources/Site';
import Check from './Resources/Check';

export default class OhDear {
  /**
   * Authentication token
   */
  token: string;

  client: any;

  constructor(token: string) {
    this.token = token;

    this.client = Fetch.before((options: FetchOptions) => {
      //add authorization headers
      const newOptions = options.clone();
      newOptions.headers['Authorization'] = `Bearer ${this.token}`;
      return newOptions;
    });
  }

  /**
   * get current user info
   */
  async me() {
    let { data } = await this.client.get('me').call();
    return Promise.resolve(User.newInstancefromApi(data));
  }

  /*-----------------------------------------------------
   * Sites Api
   ----------------------------------------------------- */

  /**
   * get sites
   * @param options
   */
  async sites(options: Partial<SitesOptions> = {}) {
    options = new SitesOptions(options);

    let {
      data: { data, meta }
    } = await this.client
      .get('sites')
      .withParams(options.toQueryString())
      .call();

    data = data.map((site: any) => Site.newInstancefromApi(site));

    return Promise.resolve({ data, meta });
  }

  async site(id: number) {
    let { data } = await this.client.get(`sites/${id}`).call();
    return Site.newInstancefromApi(data);
  }

  async siteByUrl(url: string) {
    let { data } = await this.client.get(`sites/url/${url}`).call();
    return Site.newInstancefromApi(data);
  }

  async createSite(url: string, teamID: number) {
    let { data } = await this.client
      .post('sites')
      .withBody({
        url,
        team_id: teamID
      })
      .call();

    return Site.newInstancefromApi(data);
  }

  async deleteSite(id: number) {
    let deleted = await this.client.delete(`sites/${id}`).call();
    return deleted;
  }

  /*----------------------------------------------------
  * Checks Api
  --------------------------------------------------- */
  async enableCheck(id: number) {
    const { data } = await this.client.post(`checks/${id}/enable`).call();
    return Check.newInstancefromApi(data);
  }

  async disableCheck(id: number) {
    const { data } = await this.client.post(`checks/${id}/disable`).call();
    return Check.newInstancefromApi(data);
  }

  async requestRun(id: number) {
    const { data } = await this.client.post(`checks/${id}/request-run`).call();
    return Check.newInstancefromApi(data);
  }
}
