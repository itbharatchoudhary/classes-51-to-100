const mongoose = require("mongoose");

function ConnectedToDB() {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(" Connected Database Successully!!");
    })
}

module.exports = ConnectedToDB;