const express = require('express');
const authRouter = require('./routes/auth.routes');
const CookieParser = require('cookie-parser');

const App = express();

App.use(express.json());
App.use(CookieParser());

App.use('/auth', authRouter);

module.exports = App;
