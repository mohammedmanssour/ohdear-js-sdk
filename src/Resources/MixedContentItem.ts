import ApiResource from './ApiResource';

export default class MixedContentItem extends ApiResource {
  /**
   * The name of the element that was detected as mixed content.
   *
   * @var string
   */
  public elementName: string;
  /**
   * The url of the detected mixed content.
   *
   * @var string
   */
  public mixedContentUrl: string;
  /**
   * The url where the mixed content was found.
   *
   * @var string
   */
  public foundOnUrl: string;

  static newInstance(): MixedContentItem {
    return new MixedContentItem();
  }
}
