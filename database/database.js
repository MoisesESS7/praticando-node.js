const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'admin',
      password: 'admin',
      database: 'testeDb',
    },
  });

  module.exports = knex;