const express = require('express');
const app = express();
const port = 4500;
const path = require('path');
const bodyParser = require('body-parser');



app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Server up and running at ${port}`)
})

