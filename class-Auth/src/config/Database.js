const mongooes = require("mongoose");

function connectDB(){
    mongooes.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to MongoDB")
    })
}

module.exports = connectDB;