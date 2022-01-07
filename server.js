const express = require('express')
const fetch = require('node-fetch')


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/:beerStyle', (req,res) => {
    const { beerStyle } = req.params;
    const url = `https://api.punkapi.com/v2/beers/?beer_name=${beerStyle}`

    fetch(url) 
        .then(res => res.json())
        .then(data => console.log(data))
})

app.listen(8000, () => {
    console.log('Server listening at http://localhost:8000')
})