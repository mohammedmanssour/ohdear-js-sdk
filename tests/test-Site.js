import test from 'ava';
import Site from '../dist/Resources/Site';
import OhDear from '../dist/OhDear';

let token = process.argv[3];
if (!token) {
  token = 'UeGPPLfaikI70CXLvrMBHKSANNdsSrSS9BIjAoEWbtpuYE7UXPJol5704gzS';
}

test('can create new site from api response', t => {
  const site = Site.newInstancefromApi({
    id: 1234,
    url: 'https://mohammedmanssour.me',
    sort_url: 'mohammedmanssour.me',
    checks: [
      {
        id: 12345,
        type: 'uptime',
        label: 'Uptime',
        enabled: true
      },
      {
        id: 12346,
        type: 'broken_links',
        label: 'Broken links',
        enabled: true
      }
    ]
  });

  t.is(1234, site.id);
  t.is('https://mohammedmanssour.me', site.url);
  t.is('mohammedmanssour.me', site.sortUrl);
  t.true(site.checks.length === 2);
  site.checks.map(check => {
    t.is('Check', check.constructor.name);
  });
});

test('can get all sites', async t => {
  const ohdear = new OhDear(token);
  let { data: sites, meta } = await ohdear.sites();

  t.true(sites.length >= 1);
  t.is('Site', sites[0].constructor.name);
});
