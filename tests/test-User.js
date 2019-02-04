import test from 'ava';
import OhDear from '../dist/OhDear';
import User from '../dist/Resources/User';

let token = process.argv[3];
if (!token) {
  token = 'UeGPPLfaikI70CXLvrMBHKSANNdsSrSS9BIjAoEWbtpuYE7UXPJol5704gzS';
}

test('can build user from api', t => {
  const user = User.newInstancefromApi({
    id: 1,
    name: 'Firstname Lastname',
    email: 'topsecret@email.tld',
    photoUrl: 'https://www.gravatar.com/avatar/yourhash.jpg?s=200&d=mm',
    teams: [
      {
        id: 1,
        name: 'Team Awesome'
      }
    ]
  });

  t.is(1, user.id);
  t.is('Firstname Lastname', user.name);
  t.is('topsecret@email.tld', user.email);
  t.is(
    'https://www.gravatar.com/avatar/yourhash.jpg?s=200&d=mm',
    user.photoUrl
  );
  t.is(1, user.teams[0].id);
  t.is('Team Awesome', user.teams[0].name);
});

test('can get user info', async t => {
  const ohdear = new OhDear(token);
  try {
    let user = await ohdear.me();

    t.is('User', user.constructor.name);
    t.true(user.teams.length >= 1);
    user.teams.forEach(team => {
      t.is('Team', team.constructor.name);
    });
  } catch (error) {
    t.fail();
  }
});
