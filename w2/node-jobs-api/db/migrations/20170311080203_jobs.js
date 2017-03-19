exports.up = knex => (
  knex.schema.createTable('jobs', (table) => {
    table.increments('id');
    table.string('title').notNullable(); //
    table.string('description').notNullable(); //
    table.string('company').notNullable(); //
    table.string('email').notNullable(); //
    table.boolean('contacted').notNullable().defaultTo(false); //
    table.timestamps(true, true);
  })
);

exports.down = knex => (
  knex.schema.dropTable('jobs')
);
