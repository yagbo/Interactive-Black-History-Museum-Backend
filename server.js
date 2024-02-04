/*
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your database username
    password: '!Jk9803378777', // replace with your database password
    database: 'museum_contacts' // replace with your database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Add other routes and logic
app.post('/submit', (req, res) => {
    const { name, email, subject, message } = req.body;
    const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';

    db.query(query, [name, email, subject, message], (err, result) => {
        if (err) throw err;
        console.log('Record inserted');
        // Redirect or send a response here
        res.redirect('/success.html'); // Redirect to a success page
        // res.send('Form submitted'); // Or send a simple response
    });
});
*/

/*
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// Listen on a specific port (e.g., 3000)
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse the body of the HTTP request
app.use(bodyParser.urlencoded({ extended: true }));

// Route for handling GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route for handling POST request from your form
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    // Handle your data here
    console.log(name, email, subject, message);
    res.send('Form received!');

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
