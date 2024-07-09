const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('aaa there');
})

app.listen(8080, () => {
    console.log('Listening On Port: 8080')
})