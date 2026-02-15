const mongoose = require("mongoose")

function ConnectedToDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB in connected !!");
    })
}

module.exports = ConnectedToDB;