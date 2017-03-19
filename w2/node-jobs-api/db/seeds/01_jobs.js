const jobs = [
  {
    title: 'chief senior officer',
    description: 'play all day',
    company: 'Google',
    email: 'boss@example.com',
    contacted: true,
  },
  {
    title: 'lead architect',
    description: 'work work work',
    company: 'Microsoft',
    email: 'manager@example.com',
    contacted: false,
  },
  {
    title: 'lowly serf',
    description: 'be a gopher',
    company: 'Yelp',
    email: 'hrrep@example.com',
    contacted: false,
  },
];

exports.seed = knex => (
  knex('jobs').del()
    .then(() => knex('jobs').insert(jobs))
);
