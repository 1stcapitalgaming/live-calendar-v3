const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public'
app.use(express.static('public'));

// Routes
// 1. The Public Calendar Widget
app.get('/calendar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calendar.html'));
});

// 2. The Admin Dashboard (We serve the file, but the file itself will enforce Auth)
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// 3. Login Page (Root)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});