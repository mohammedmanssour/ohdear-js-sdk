import Fetch from './Fetch';
import User from './Resources/User';
import FetchOptions from 'fetch-http-wrapper/dist/lib/FetchOptions';

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
}
