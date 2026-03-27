const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello Jiayi!');
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        student: 'Jiayi Tang'
    });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
