exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function (table) {
    table.increments('id');
    table.string('title').notNullable(); //
    table.string('description').notNullable(); //
    table.string('company').notNullable(); //
    table.string('email').notNullable(); //
    table.boolean('contacted').notNullable().defaultTo(false); //
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};
