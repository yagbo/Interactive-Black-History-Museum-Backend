const mysql = require('mysql2');

/*
    Database connection
    change user, password and database to your local system requirements. connection will fail if any of those are wrong
*/
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '!Jk9803378777', 
    database: 'museum_contacts' 
});

/*
    lets us know if we successfully connected to the database. prints in terminal
*/
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

/*
    imperative setup
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

/*
    function that inserts "contact us" information into MySQL 
*/
function insertConstant(name, email, subject, message) {
    const query = 'INSERT INTO information (name, email, subject, message) VALUES (?, ? ,? ,? )';
    db.query(query, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            return;
        }
        console.log('Constant inserted', result.insertId);
    });
}

module.exports = { insertConstant };


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

    insertConstant(name, email, subject, message);

    res.send('Form received!');
});

// Be on standby for more stuff entering 
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




