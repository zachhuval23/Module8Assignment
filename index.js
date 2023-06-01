const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

// Serves static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Defines routes and handles the requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// 404 Page when not using the above links
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Starts the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});