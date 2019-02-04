import test from 'ava';
import SitesOptions from '../dist/Models/SitesOptions';
import Page from '../dist/Models/Page';
import Filter from '../dist/Models/Filter';

test('can create page object', t => {
  const page = new Page({ number: 2 });

  t.is(2, page.number);
  t.is(200, page.size);

  t.deepEqual(
    {
      'page[size]': 200,
      'page[number]': 2
    },
    page.get()
  );
});

test('can create filter object', t => {
  const filter = new Filter({ teamID: 2 });
  t.is(2, filter.teamID);

  t.deepEqual(
    {
      'filter[team_id]': 2
    },
    filter.get()
  );
});

test('can create SitesOptionsFilter', t => {
  let options = new SitesOptions({
    page: { number: 2, size: 300 },
    sort: 'Prefix',
    filter: { teamID: 2 }
  });

  t.deepEqual(
    {
      'page[number]': 2,
      'page[size]': 300,
      sort: 'Prefix',
      'filter[team_id]': 2
    },
    options.toQueryString()
  );

  options = new SitesOptions({
    page: { number: 2, size: 300 }
  });

  t.deepEqual(
    {
      'page[number]': 2,
      'page[size]': 300
    },
    options.toQueryString()
  );
});
