const express = require('express');
const app = express();
const router = require('./routes/routing');
/* Import the required modules here */

/* Configure the required middleware functions in proper order */

app.use('/', router);

app.listen(3000, () => {
    console.log("server listening in port 3000");
})
