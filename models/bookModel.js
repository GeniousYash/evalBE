const mongoose = require('mongoose');

bookSchema = new mongoose.Schema({
     title: {type:String},
     author: {type:String},
     status: {type:String}
},{
     versionKey:false
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;