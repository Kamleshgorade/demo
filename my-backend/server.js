const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2'); // Updated to mysql2

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database configuration for MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Master',
    port: 3306
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig).promise();


// POST endpoint to create a new job entry in the database
app.post('/api/jobs', async (req, res) => {
    try {
        console.log('Received POST request to /api/jobs'); // Log endpoint hit
        console.log('Request Body:', req.body); // Log the full request body

        const { JOBTITLE, JOBDISC, COMPANY, LOCATION, POSTEDDATE } = req.body;

        // Validate request body
        if (!JOBTITLE || !JOBDISC || !COMPANY || !LOCATION || !POSTEDDATE) {
            console.log('Validation failed: Missing fields'); // Log validation errors
            return res.status(400).json({ message: 'All fields are required.' });
        }

        console.log('Validated Data:', { JOBTITLE, JOBDISC, COMPANY, LOCATION, POSTEDDATE }); // Log extracted fields

        // Insert data into the database
        const query = `
            INSERT INTO tbljob (JOBTITLE, JOBDISC, COMPANY, LOCATION, POSTEDDATE)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await pool.execute(query, [JOBTITLE, JOBDISC, COMPANY, LOCATION, POSTEDDATE]);

        console.log('Job inserted successfully:', result); // Log insertion success
        res.status(201).json({ message: 'Job created successfully' });
    } catch (error) {
        console.error('Error creating job:', error); // Log the error in detail
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// GET endpoint to fetch all jobs
app.get('/api/jobs', async (req, res) => {
    try {
        const query = 'SELECT * FROM tbljob';
        const [rows] = await pool.query(query);

        // Log the fetched data for debugging purposes
        console.log('Jobs fetched successfully:', rows);

        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ message: 'Error fetching jobs', error: error.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
