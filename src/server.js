require('dotenv').config()
const {databaseConfig,appConfig} = require("./config/config")
const mongoose = require("mongoose")
const app = require("./app")
const uri = `mongodb://${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.dbName}`

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},(error,res)=>{
    if(error){
        throw error
    }
    else{
        console.log('mongo is connected')
    }
    app.listen(appConfig.port,()=>{
        console.log(`running on ${appConfig.host}:${appConfig.port}`)
    })
})