const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/', (req, res) => {
    const { beerStyle } = req.body;
    const apiUrl = `https://api.punkapi.com/v2/beers/?beer_name=${beerStyle}`;

    fetch(urlApi)
        .then(res => res.json)
        .then

})

app.listen(8000, () => {
    console.log('Server listening at http://localhost:8000')
})