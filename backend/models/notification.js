const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Types.ObjectId,
        required : false,
        ref : 'user'
    }

})

const notification = mongoose.model("notification",notificationSchema)
module.exports = notification