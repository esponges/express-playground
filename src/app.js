const express = require('express');
const app = express();
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorLogger');
const requestLogger = require('./utilities/requestLogger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const combinedRouter = express.Router();
combinedRouter.use('/', router);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(requestLogger);
app.use(session({ 
    secret: 'someSecret',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL })
 }));
app.use('/', combinedRouter);
app.use(errorLogger);

app.listen(3000, () => {
    console.log("server running in port 3000");
})
