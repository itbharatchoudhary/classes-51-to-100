require('dotenv').config();
const App = require("./src/App");
const connectDB = require('./src/config/Database');

connectDB();

App.listen(3000, ()=>{
    console.log('Server is connected on port 3000');
});