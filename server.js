const express = require('express')
const fetch = require('node-fetch')

const app = express();

app.get('/:beerStyle', (req,res) => {
    const { beerStyle } = req.params;
    const url = `https://api.punkapi.com/v2/beers/?beer_name=${beerStyle}`

    fetch(url) 
        .then(response => response.json())
        .then(data => res.send(data))
})

app.listen(3000, () => {
    console.log('Server listening at http://localhost:8000')
})