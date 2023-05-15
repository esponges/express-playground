const express = require('express');
const app = express();
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorLogger');
const requestLogger = require('./utilities/requestLogger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const combinedRouter = express.Router();
combinedRouter.use('/', router);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(requestLogger);
app.use(session({ secret: 'MyShoppingCart', resave: true, saveUninitialized: true }));
app.use('/', combinedRouter);
app.use(errorLogger);

app.listen(3000, () => {
    console.log("server running in port 3000");
})
