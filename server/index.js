const express = require('express');
const { pool, createTables } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const init = async () => {
    try {
        await pool.connect(); // Ensure the pool will start with the ability to connect
        await createTables();
        console.log('Database tables are created successfully');
        
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit with a failure mode
    }
};

init();
