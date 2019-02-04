export default class Filter {
  teamID: number;

  constructor(filter: Partial<Filter>) {
    this.teamID = filter.teamID ? filter.teamID : null;
  }

  get() {
    let filter: any = {};
    if (this.teamID) {
      filter['filter[team_id]'] = this.teamID;
    }

    return filter;
  }
}
