const express = require('express'),
    path = require('path'),
    port = process.env.PORT || 8081;

const app = express();

// app.get('/', (req, res) => res.send('Hello world!'));
// app.get('/about', (req, res) => res.send('about'));
// app.get('/secret', (req, res) => res.send('You are on secret page!'));

app.use(express.static(__dirname));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => console.log('Example app listening on port: ', port));