const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb://localhost:27017/SignUpLogIn")
connect.then(()=>{
    console.log('mongodb connected')
})
connect.catch(()=>{
    console.log('failed to connect')
})

const loginschema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =  mongoose.model('collection1',loginschema)

module.exports = collection