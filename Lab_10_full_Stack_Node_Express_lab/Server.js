const express = require('express');
const app = express();

// Task 1
const students = ["Ali", "Ahmed", "Hamza", "Asim"];

app.get('/students', (req, res) => {
    let list = "<h2>Student List</h2><ul>";
    students.forEach(student => {
        list += `<li>${student}</li>`;
    });
    list += "</ul>";
    res.send(list);
});

// Task 2
app.get('/home', (req, res) => {
    res.send("<h1>Welcome Home</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

// Task 3
app.get('/user/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}</h1>`);
});

// Task 4
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head><title>My Page</title></head>
        <body>
            <h1>Welcome</h1>
            <p>Simple Express HTML Page</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </body>
        </html>
    `);
});

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});