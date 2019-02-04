import Fetch from './Fetch';
import User from './Resources/User';
import FetchOptions from 'fetch-http-wrapper/dist/lib/FetchOptions';
import SitesOptions from './Models/SitesOptions';
import Site from './Resources/Site';

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
}
