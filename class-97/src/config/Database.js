const mongoose = require("mongoose");

function ConnectedDB() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database Connected Successfully");
        })
        .catch((err) => {
            console.error("Database connection error:", err.message);
            process.exit(1);
        });
}

module.exports = ConnectedDB;
