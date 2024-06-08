const { Pool } = require('pg');

const pool = new Pool({
    user: 'cesar',
    password: 'password',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'cuentos'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};