const App = require('./src/App.js');
const mongoose = require('mongoose');

function connectedToDB() {
    mongoose.connect("mongodb+srv://Bharat:ufIVgxImuJveDPlf@cluster0.ax77efh.mongodb.net/class-90")
        .then(() => {
            console.log('Connected to Database');
        });
};
connectedToDB();

App.listen(3000, () => {
    console.log("server is connected!");
});