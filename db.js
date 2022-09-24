const mongoose = require ('mongoose')
MongoURI = 'mongodb+srv://user:user123@cluster0.tz7r3ph.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = ()=>{
    mongoose.connect(MongoURI,(()=>{
        console.log("server is UP mongoDb is Connected")
    }))
}
module.exports = connectToMongo;