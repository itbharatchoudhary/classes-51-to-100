const express = require('express');
const App = express();
const AuthRouth = require('./Routes/Auth.routes');
const cookieParser = require("cookie-parser");

App.use(cookieParser());
App.use(express.json());
App.use("/Auth", AuthRouth)

module.exports = App;