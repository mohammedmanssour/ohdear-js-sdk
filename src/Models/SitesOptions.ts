import Page from './Page';
import Filter from './Filter';

export default class SitesOptions {
  page: Page;
  sort: string;
  filter: Filter;

  constructor(options: Partial<SitesOptions>) {
    this.page = new Page(options.page ? options.page : {});
    this.sort = options.sort;
    this.filter = new Filter(options.filter ? options.filter : {});
  }

  toQueryString() {
    let query = Object.assign({}, this.page.get(), this.filter.get());
    if (this.sort) {
      query.sort = this.sort;
    }

    return query;
  }
}
