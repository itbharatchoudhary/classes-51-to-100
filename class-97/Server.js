require('dotenv').config();
const App = require('./src/App');
const ConnectedDB = require('./src/config/Database');

ConnectedDB();

App.listen(3000, () => {
    console.log("server start successfully!!");
});
