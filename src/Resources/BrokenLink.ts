import ApiResource from './ApiResource';

export default class BrokenLink extends ApiResource {
  /**
   * The status code the site responded with.
   *
   * @var int|null
   */
  public statusCode?: number;

  /**
   * The url that is broken.
   *
   * @var string
   */
  public crawledUrl: string;

  /**
   * The url where the broken url was found.
   *
   * @var string
   */
  public foundOnUrl: string;

  static newInstance(): BrokenLink {
    return new BrokenLink();
  }
}
