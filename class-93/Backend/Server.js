require("dotenv").config();

const App = require("./src/App");
const ConnectedToDB = require("./src/config/Database");

ConnectedToDB();

App.listen(3000,()=>{
    console.log("Server connected Successfully !!");
});
