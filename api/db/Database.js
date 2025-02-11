const mongoose = require("mongoose")

let instance = null 

class Database {
     constructor(){
        if(!instance){
            this.mongoDBConnection = null
            instance = this
        }
     }
    async connect(options){
        try {
            console.log("DB Connecting")
        let db = await mongoose.connect(options.DB_URL)
        this.mongoDBConnection = db
        console.log("DB Connected")
        } catch (error) {
            console.error(error)
            process.exit(1)
        }

    }
}

module.exports = Database
