export default class Page {
  size: number;
  number: number;

  constructor(page: Partial<Page>) {
    this.number = page.number ? page.number : 1;
    this.size = page.size ? page.size : 200;
  }

  get() {
    return {
      'page[size]': this.size,
      'page[number]': this.number
    };
  }
}
