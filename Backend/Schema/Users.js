const mongoose = require('mongoose');

const schema = mongoose.Schema;

const User = new schema({
    Email:{
        type: String,
        required: true,
        unique: true 
    },
    username:String,
    dob:Date,
    Date:{
        type:Date,
        default:Date.now
    }
})

let UserSchema = mongoose.model('User',User);

module.exports = UserSchema;