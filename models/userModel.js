const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
     username: {type:String},
     email: {type:String, required:true},
     password: {type:String, required:true}
},{
     versionKey:false
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;