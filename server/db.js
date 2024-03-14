const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://localhost/acme_vacations_db',
});

const createTables = async () => {
    const sql = `
    DROP TABLE IF EXISTS vacations;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS places;

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    CREATE TABLE places (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    CREATE TABLE vacations (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) NOT NULL,
        place_id INTEGER REFERENCES places(id) NOT NULL,
        departure_date DATE NOT NULL
    );
    `;
    await pool.query(sql);
};

module.exports = {
    createTables,
    pool,
};
