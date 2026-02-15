const mongoose = require("mongoose");

function ConnectedToDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB is connected Successfully !!");
    })
}

module.exports = ConnectedToDB;